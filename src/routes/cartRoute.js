import express from 'express';
import { CartManager } from '../dao/CartManager.js';

const router = express.Router();
const cartManager = new CartManager();

router.get('/', async (req, res) => {
  try {
    const carts = await cartManager.getAllCarts();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const result = await cartManager.createCart();
    res.status(201).json(result);
    req.app.get('io').emit('carritoAgregado', result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:cid', async (req, res) => {
  const cid = req.params.cid;
  try {
    const cart = await cartManager.getCartById(cid);
    res.json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/:cid/product/:pid', async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const { title, thumbnail, price, quantity } = req.body;
  try {
    const result = await cartManager.addProductToCart(cid, pid, { title, thumbnail, price, quantity });
    req.app.get('io').emit('productoAgregadoEnCarrito');
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:cid/products/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    console.log(`Updating product ${pid} in cart ${cid} with quantity ${quantity}`);

    const result = await cartManager.updateProduct(cid, pid, { quantity });
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al actualizar la cantidad de producto' });
  }
});


router.delete('/:cid/products/:pid', async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  try {
    const result = await cartManager.deleteProductFromCart(cid, pid);
    res.json(result);
    req.app.get('io').emit('productoEliminadoDelCarrito');
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:cid', async (req, res) => {
  const cid = req.params.cid;
  try {
    const result = await cartManager.deleteCart(cid);
    res.json(result);
    req.app.get('io').emit('carritoEliminado');
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;

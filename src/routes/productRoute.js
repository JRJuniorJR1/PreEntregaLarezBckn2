import express from 'express';
import { ProductManager } from '../dao/ProductManager.js';
import Product from '../dao/models/productSchema.js';

const router = express.Router();
const productManager = new ProductManager();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const product = req.body;
  try {
    req.app.get('io').emit('productoAgregado');
    const result = await productManager.addProduct(product);
    res.status(201).json(result);
  } catch (error) {
    if (error.message.includes('ya existe en la base de datos')) {
      res.status(400).json({ error: 'El producto ya existe en la base de datos.' });
    } else {
      console.error('Error al agregar el producto:', error.message);
      res.status(500).json({ error: 'Error al agregar el producto.' });
    }
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productManager.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;
  try {
    const result = await productManager.updateProduct(id, updatedFields);
    req.app.get('io').emit('productoModificado');
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await productManager.deleteProduct(id);
    req.app.get('io').emit('productoEliminado');
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

export default router;
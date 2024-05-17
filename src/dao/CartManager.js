import Cart from './models/cartSchema.js';
import Product from './models/productSchema.js';
export class CartManager {
  async getAllCarts() {
    try {
      const carts = await Cart.find({});
      return carts;
    } catch (error) {
      throw new Error('Error al obtener los carritos: ' + error.message);
    }
  }

  async createCart() {
    try {
      const newCart = new Cart({ products: [] });
      await newCart.save();
      return { message: 'Carrito creado satisfactoriamente', cart: newCart };
    } catch (error) {
      throw new Error('Error al crear el carrito: ' + error.message);
    }
  }

  async updateProduct(cid, pid, updatedFields) {
    try {
      const cart = await Cart.findById(cid);
      if (!cart) {
        throw new Error('Carrito no encontrado.');
      }
      const productIndex = cart.products.findIndex(p => p._id.toString() === pid);
      if (productIndex === -1) {
        console.log(`Product ID ${pid} not found in cart ${cid}`);
        throw new Error('Producto no encontrado en el carrito.');
      }
      cart.products[productIndex].quantity = updatedFields.quantity;
      await cart.save();
      const updatedProduct = cart.products[productIndex];
      return {
        message: 'Producto actualizado con éxito.',
        updatedProduct,
      };
    } catch (error) {
      throw new Error('Error al actualizar el producto: ' + error.message);
    }
  } 
  

  async getCartById(id) {
    try {
      const cart = await Cart.findById(id);
      if (!cart) {
        throw new Error('Carrito no encontrado.');
      }
      return cart;
    } catch (error) {
      throw new Error('Error al obtener el carrito: ' + error.message);
    }
  }

  async addProductToCart(cid, pid, productDetails) {
    try {
      const { title, thumbnail, price, quantity } = productDetails;
      const product = await Product.findById(pid);
      if (!product) {
        throw new Error(`El producto con ID ${pid} no existe.`);
      }
      const cart = await Cart.findById(cid);
      if (!cart) {
        throw new Error("Carrito no encontrado.");
      }
      const productIndex = cart.products.findIndex(p => p._id.toString() === pid);
      if (productIndex !== -1) {
        cart.products[productIndex].quantity += parseInt(quantity);
      } else {
        cart.products.push({ _id: pid, title, thumbnail, price, quantity });
      }
      await cart.save();
      return { message: 'Producto agregado al carrito satisfactoriamente' };
    } catch (error) {
      throw new Error('Error al agregar el producto al carrito: ' + error.message);
    }
  }
  
  async deleteCart(cid) {
    try {
      const result = await Cart.findByIdAndDelete(cid);
      if (!result) {
        throw new Error('Carrito no encontrado.');
      }
      return { message: 'Carrito eliminado satisfactoriamente' };
    } catch (error) {
      throw new Error('Error al eliminar el carrito: ' + error.message);
    }
  }

  async deleteProductFromCart(cid, pid) {
    try {
      const cart = await Cart.findById(cid);
      if (!cart) {
        throw new Error('Carrito no encontrado.');
      }
      const productIndex = cart.products.findIndex(p => p._id.toString() === pid);
      if (productIndex === -1) {
        throw new Error('Producto no encontrado en el carrito.');
      }
      cart.products.splice(productIndex, 1);
      await cart.save();
      return { message: 'Producto eliminado del carrito con éxito.' };
    } catch (error) {
      throw new Error('Error al eliminar el producto del carrito: ' + error.message);
    }
  }
  
}

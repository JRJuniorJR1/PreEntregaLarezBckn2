import Product from './models/productSchema.js';

export class ProductManager {
  
  async addProduct(product) {
    try {
      const existingProduct = await Product.findOne({ code: product.code });
      if (existingProduct) {
        throw new Error(`El código ${product.code} ya existe en la base de datos.`);
      }
      const newProduct = new Product(product);
      await newProduct.save();
      return { message: 'Producto agregado satisfactoriamente', product: newProduct };
    } catch (error) {
      throw new Error('Error al agregar el producto: ' + error.message);
    }
  } 

  async getAllProducts(page = 1, limit = null, defaultLimit = 10, sort = null, query = {}) {
    try {
      let options = {
        page: parseInt(page),
        limit: parseInt(limit) || defaultLimit,
        customLabels: {
          docs: 'products',
          totalDocs: 'totalProducts',
          totalPages: 'totalPages',
          nextPage: 'nextPage',
          prevPage: 'prevPage'
        },
        sort: sort
      };

      const products = await Product.paginate(query, options);
      return products;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error.message);
    }
  }  

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  }

  async updateProduct(id, updatedFields) {
    try {
      const result = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
      if (!result) {
        throw new Error("Producto no encontrado.");
      }
      return { message: "Producto actualizado con éxito.", product: result };
    } catch (error) {
      throw new Error('Error al actualizar el producto: ' + error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const result = await Product.findByIdAndDelete(id);
      if (!result) {
        throw new Error("Producto no encontrado.");
      }
      return { message: "Producto eliminado satisfactoriamente" };
    } catch (error) {
      throw new Error('Error al eliminar el producto: ' + error.message);
    }
  }


async searchProductsByTitle(title, page = 1, limit = null, defaultLimit = 10, sort = null) {
  try {
    const query = { title: { $regex: title, $options: 'i' } };
    return await this.getAllProducts(page, limit, defaultLimit, sort, query);
  } catch (error) {
    throw new Error('Error al buscar productos por título: ' + error.message);
  }
}
}


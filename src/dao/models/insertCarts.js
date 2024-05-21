import mongoose from 'mongoose';
import Cart from './models/cartSchema.js';

mongoose.connect('mongodb+srv://jrjuniorjr:jrjuniorjr@jrjuniorjrdatabase.pqxup5d.mongodb.net/Ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos');
}).catch(error => {
  console.error('Error al conectar a la base de datos:', error);
});

const cartsToInsert = [
  {
    products: [
      {
        productId: 'id_del_producto_1',
        title: 'Producto 1',
        thumbnail: 'thumbnail1.jpg',
        price: 10.99,
        quantity: 1
      },

    ]
  },

];

Cart.insertMany(cartsToInsert)
  .then(() => {
    console.log('Carritos insertados con éxito');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error al insertar carritos:', error);
    mongoose.connection.close();
  });

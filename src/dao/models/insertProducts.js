import mongoose from 'mongoose';
import Product from './productSchema.js'; 


mongoose.connect('mongodb://localhost:27017/Ecommerce')
  .then(() => {
    console.log('Conexión exitosa a la base de datos en insert');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos en insert:', error);
  });

const productsToInsert = [
    {
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 10.99,
        thumbnail: 'thumbnail1.jpg',
        code: 'P001',
        stock: 100
      },
      {
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 9.99,
        thumbnail: 'thumbnail2.jpg',
        code: 'P002',
        stock: 50
      },
      {
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 12.99,
        thumbnail: 'thumbnail3.jpg',
        code: 'P003',
        stock: 200
      },
      {
        title: 'Producto 4',
        description: 'Descripción del producto 4',
        price: 8.99,
        thumbnail: 'thumbnail4.jpg',
        code: 'P004',
        stock: 150
      },
      {
        title: 'Producto 5',
        description: 'Descripción del producto 5',
        price: 11.99,
        thumbnail: 'thumbnail5.jpg',
        code: 'P005',
        stock: 80
      },
      {
        title: 'Producto 6',
        description: 'Descripción del producto 6',
        price: 13.99,
        thumbnail: 'thumbnail6.jpg',
        code: 'P006',
        stock: 120
      },
      {
        title: 'Producto 7',
        description: 'Descripción del producto 7',
        price: 9.49,
        thumbnail: 'thumbnail7.jpg',
        code: 'P007',
        stock: 90
      },
      {
        title: 'Producto 8',
        description: 'Descripción del producto 8',
        price: 10.49,
        thumbnail: 'thumbnail8.jpg',
        code: 'P008',
        stock: 110
      },
      {
        title: 'Producto 9',
        description: 'Descripción del producto 9',
        price: 12.49,
        thumbnail: 'thumbnail9.jpg',
        code: 'P009',
        stock: 130
      },
      {
        title: 'Producto 10',
        description: 'Descripción del producto 10',
        price: 11.49,
        thumbnail: 'thumbnail10.jpg',
        code: 'P010',
        stock: 140
      },
      {
        title: 'Producto 11',
        description: 'Descripción del producto 11',
        price: 9.99,
        thumbnail: 'thumbnail11.jpg',
        code: 'P011',
        stock: 160
      },
      {
        title: 'Producto 12',
        description: 'Descripción del producto 12',
        price: 10.99,
        thumbnail: 'thumbnail12.jpg',
        code: 'P012',
        stock: 170
      },
      {
        title: 'Producto 13',
        description: 'Descripción del producto 13',
        price: 12.99,
        thumbnail: 'thumbnail13.jpg',
        code: 'P013',
        stock: 180
      },
      {
        title: 'Producto 14',
        description: 'Descripción del producto 14',
        price: 9.49,
        thumbnail: 'thumbnail14.jpg',
        code: 'P014',
        stock: 190
      },
      {
        title: 'Producto 15',
        description: 'Descripción del producto 15',
        price: 10.49,
        thumbnail: 'thumbnail15.jpg',
        code: 'P015',
        stock: 200
      },
      {
        title: 'Producto 16',
        description: 'Descripción del producto 16',
        price: 12.49,
        thumbnail: 'thumbnail16.jpg',
        code: 'P016',
        stock: 210
      },
      {
        title: 'Producto 17',
        description: 'Descripción del producto 17',
        price: 11.49,
        thumbnail: 'thumbnail17.jpg',
        code: 'P017',
        stock: 220
      },
      {
        title: 'Producto 18',
        description: 'Descripción del producto 18',
        price: 9.99,
        thumbnail: 'thumbnail18.jpg',
        code: 'P018',
        stock: 230
      },
      {
        title: 'Producto 19',
        description: 'Descripción del producto 19',
        price: 10.99,
        thumbnail: 'thumbnail19.jpg',
        code: 'P019',
        stock: 240
      },
      {
        title: 'Producto 20',
        description: 'Descripción del producto 20',
        price: 12.99,
        thumbnail: 'thumbnail20.jpg',
        code: 'P020',
        stock: 250
      },
      {
        title: 'Producto 21',
        description: 'Descripción del producto 21',
        price: 9.49,
        thumbnail: 'thumbnail21.jpg',
        code: 'P021',
        stock: 260
      },
      {
        title: 'Producto 22',
        description: 'Descripción del producto 22',
        price: 10.49,
        thumbnail: 'thumbnail22.jpg',
        code: 'P022',
        stock: 270
      },
      {
        title: 'Producto 23',
        description: 'Descripción del producto 23',
        price: 12.49,
        thumbnail: 'thumbnail23.jpg',
        code: 'P023',
        stock: 280
      },
      {
        title: 'Producto 24',
        description: 'Descripción del producto 24',
        price: 11.49,
        thumbnail: 'thumbnail24.jpg',
        code: 'P024',
        stock: 290
      },
      {
        title: 'Producto 25',
        description: 'Descripción del producto 25',
        price: 9.99,
        thumbnail: 'thumbnail25.jpg',
        code: 'P025',
        stock: 300
      },
      {
        title: 'Producto 26',
        description: 'Descripción del producto 26',
        price: 10.99,
        thumbnail: 'thumbnail26.jpg',
        code: 'P026',
        stock: 310
      },
      {
        title: 'Producto 27',
        description: 'Descripción del producto 27',
        price: 12.99,
        thumbnail: 'thumbnail27.jpg',
        code: 'P027',
        stock: 320
      },
      {
        title: 'Producto 28',
        description: 'Descripción del producto 28',
        price: 9.49,
        thumbnail: 'thumbnail28.jpg',
        code: 'P028',
        stock: 330
      },
      {
        title: 'Producto 29',
        description: 'Descripción del producto 29',
        price: 10.49,
        thumbnail: 'thumbnail29.jpg',
        code: 'P029',
        stock: 340
      },
      {
        title: 'Producto 30',
        description: 'Descripción del producto 30',
        price: 12.49,
        thumbnail: 'thumbnail30.jpg',
        code: 'P030',
        stock: 350
      },
      {
        title: 'Producto 31',
        description: 'Descripción del producto 31',
        price: 11.49,
        thumbnail: 'thumbnail31.jpg',
        code: 'P031',
        stock: 360
      },
      {
        title: 'Producto 32',
        description: 'Descripción del producto 32',
        price: 9.99,
        thumbnail: 'thumbnail32.jpg',
        code: 'P032',
        stock: 370
      },
      {
        title: 'Producto 33',
        description: 'Descripción del producto 33',
        price: 10.99,
        thumbnail: 'thumbnail33.jpg',
        code: 'P033',
        stock: 380
      },
      {
        title: 'Producto 34',
        description: 'Descripción del producto 34',
        price: 12.99,
        thumbnail: 'thumbnail34.jpg',
        code: 'P034',
        stock: 390
      },
      {
        title: 'Producto 35',
        description: 'Descripción del producto 35',
        price: 9.49,
        thumbnail: 'thumbnail35.jpg',
        code: 'P035',
        stock: 400
      },
      {
        title: 'Producto 36',
        description: 'Descripción del producto 36',
        price: 10.49,
        thumbnail: 'thumbnail36.jpg',
        code: 'P036',
        stock: 410
      },
      {
        title: 'Producto 37',
        description: 'Descripción del producto 37',
        price: 12.49,
        thumbnail: 'thumbnail37.jpg',
        code: 'P037',
        stock: 420
      },
      {
        title: 'Producto 38',
        description: 'Descripción del producto 38',
        price: 11.49,
        thumbnail: 'thumbnail38.jpg',
        code: 'P038',
        stock: 430
      },
      {
        title: 'Producto 39',
        description: 'Descripción del producto 39',
        price: 9.99,
        thumbnail: 'thumbnail39.jpg',
        code: 'P039',
        stock: 440
      },
      {
        title: 'Producto 40',
        description: 'Descripción del producto 40',
        price: 10.99,
        thumbnail: 'thumbnail40.jpg',
        code: 'P040',
        stock: 450
      },
      {
        title: 'Producto 41',
        description: 'Descripción del producto 41',
        price: 12.49,
        thumbnail: 'thumbnail41.jpg',
        code: 'P041',
        stock: 460
      },
      {
        title: 'Producto 42',
        description: 'Descripción del producto 42',
        price: 9.49,
        thumbnail: 'thumbnail42.jpg',
        code: 'P042',
        stock: 470
      },
      {
        title: 'Producto 43',
        description: 'Descripción del producto 43',
        price: 10.49,
        thumbnail: 'thumbnail43.jpg',
        code: 'P043',
        stock: 480
      },
      {
        title: 'Producto 44',
        description: 'Descripción del producto 44',
        price: 12.49,
        thumbnail: 'thumbnail44.jpg',
        code: 'P044',
        stock: 490
      },
      {
        title: 'Producto 45',
        description: 'Descripción del producto 45',
        price: 11.49,
        thumbnail: 'thumbnail45.jpg',
        code: 'P045',
        stock: 500
      },
      {
        title: 'Producto 46',
        description: 'Descripción del producto 46',
        price: 9.99,
        thumbnail: 'thumbnail46.jpg',
        code: 'P046',
        stock: 510
      },
      {
        title: 'Producto 47',
        description: 'Descripción del producto 47',
        price: 10.99,
        thumbnail: 'thumbnail47.jpg',
        code: 'P047',
        stock: 520
      },
      {
        title: 'Producto 48',
        description: 'Descripción del producto 48',
        price: 12.49,
        thumbnail: 'thumbnail48.jpg',
        code: 'P048',
        stock: 530
      },
      {
        title: 'Producto 49',
        description: 'Descripción del producto 49',
        price: 9.49,
        thumbnail: 'thumbnail49.jpg',
        code: 'P049',
        stock: 540
      },
      {
        title: 'Producto 50',
        description: 'Descripción del producto 50',
        price: 10.49,
        thumbnail: 'thumbnail50.jpg',
        code: 'P050',
        stock: 550
      },
      {
        title: 'Producto 51',
        description: 'Descripción del producto 51',
        price: 12.49,
        thumbnail: 'thumbnail51.jpg',
        code: 'P051',
        stock: 600
      },
      {
        title: 'Producto 56',
        description: 'Descripción del producto 56',
        price: 9.99,
        thumbnail: 'thumbnail56.jpg',
        code: 'P056',
        stock: 610
      },
      {
        title: 'Producto 57',
        description: 'Descripción del producto 57',
        price: 10.99,
        thumbnail: 'thumbnail57.jpg',
        code: 'P057',
        stock: 620
      },
      {
        title: 'Producto 58',
        description: 'Descripción del producto 58',
        price: 12.49,
        thumbnail: 'thumbnail58.jpg',
        code: 'P058',
        stock: 630
      },
      {
        title: 'Producto 59',
        description: 'Descripción del producto 59',
        price: 9.49,
        thumbnail: 'thumbnail59.jpg',
        code: 'P059',
        stock: 640
      },
      {
        title: 'Producto 60',
        description: 'Descripción del producto 60',
        price: 10.49,
        thumbnail: 'thumbnail60.jpg',
        code: 'P060',
        stock: 650
      }
];

Product.insertMany(productsToInsert)
  .then(() => {
    console.log('Productos insertados con éxito');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error al insertar productos:', error);
    mongoose.connection.close();
  });

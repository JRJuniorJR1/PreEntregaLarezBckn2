import express from 'express';
import exphbs from 'express-handlebars';
import viewRoute from './routes/viewRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import chatRouter from './routes/chatRoute.js'
import path from 'path';
import http from 'http';
import { initializeSocketEvents } from './routes/socketEvents.js';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const io = initializeSocketEvents(server);

app.set('io', io);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'home',
  layoutsDir: `${path.dirname(new URL(import.meta.url).pathname)}/routes/views/layouts`,
}));
app.set('view engine', 'hbs');
app.set('views', `${path.dirname(new URL(import.meta.url).pathname)}/routes/views`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api', chatRouter);
app.use('/', viewRoute);


const uri = 'mongodb+srv://jrjuniorjr:jrjuniorjr@jrjuniorjrdatabase.pqxup5d.mongodb.net/Ecommerce';

mongoose.connect(uri)
.then(() => {
  console.log('Conexión exitosa a MongoDB');
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
})
.catch(error => {
  console.error('Error al conectar a MongoDB:', error);
});

export { server };

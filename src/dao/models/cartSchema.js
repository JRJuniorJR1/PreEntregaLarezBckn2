import mongoose from 'mongoose';

const { Schema } = mongoose;

const cartSchema = new Schema({
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      title: String,
      thumbnail: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

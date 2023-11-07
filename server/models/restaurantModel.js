import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  price: String,
  category: String,
  image: String,
});

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    image: String,
    category: String,
    location: String,
    author_id: {
      type: Schema.Types.ObjectId,
      ref: "employee",
    },
    menus: [menuSchema],
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("restaurant", restaurantSchema);

export default Restaurant;

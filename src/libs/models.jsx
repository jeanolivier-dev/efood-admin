import mongoose from "mongoose";

const coustomerShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  restaurantName: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 30,
  },
  emailAdress: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: Number,
    min: 10,
  },
  password: {
    type: String,
    required: true,
  },
});

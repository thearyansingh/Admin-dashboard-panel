import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
},);

const User=mongoose.model("User",userSchema)

export default User;

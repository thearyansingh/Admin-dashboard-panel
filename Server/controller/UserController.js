import bcrypt from "bcrypt";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;

    // Check if user already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // if (!validator.isEmail(email)) {
    //   return res.json({ success: false, message: "Enter a valid email" });
    // }

    // Validate password length
    if (password.length < 4) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password with salt

    // Create new user
    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      role,
    });

    // Save user to database
    const user = await newUser.save();

    res.json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.json({ message: "data not provided" });

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "user not found" });

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) return res.json({ message: "password not matched" });

    const token = jwt.sign(
      { _id: user._id, userRole: user.role },
      process.env.VERIFY_TOKEN,
      {
        expiresIn: "1d",
      },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: "Login successfull",
      userData: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "internal server error", error });
  }
};

const getAllUser = async (req, res) => {
  try {
    const readUsers = await User.find();

    if (readUsers.length === 0) {
      return res.json({ message: "No user found" });
    }


    return res.json({
      message: "All the users",
      users: readUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const authMe = async (req, res) => {
  try {
    // console.log(userInput)
    const userData = await User.findById(req.user);
    // .select("-password");

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // 4. Return user
    res.status(200).json({
      success: true,
      message: "User logged in",
      userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// const updateUser=async(req,res)=>{

// }

export { register, login, getAllUser, authMe };

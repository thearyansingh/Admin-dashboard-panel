import jwt from "jsonwebtoken";

const protect = (req, res, next) => {

  try {
    const token = req.cookies.token;
    console.log(token)
  if (!token) return res.status(401).json({ message: "user not logged in" });
      console.log(token);
    const jwtVerify = jwt.verify(token,process.env.VERIFY_TOKEN);
    req.user = jwtVerify;
    console.log(req.user)
    next();
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export default protect;

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signUp = async (req, res) => {
  const { name, dob, email, password } = req.body;

  if (!name || !dob || !email || !password) {
    return res.status(400).json({
      message:
        "Please provide all required fields (name, dob, email, password)",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = new User({ name, dob, email, password: hashedPassword });
    await newUser.save();

    return res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error signing up:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Sign In successful!", token });
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

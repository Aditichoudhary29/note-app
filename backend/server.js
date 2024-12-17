const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

app.use("/api/notes", noteRoutes);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

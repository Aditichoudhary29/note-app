const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");
const {
  getNotes,
  addNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

router.get("/", authenticateToken, getNotes);
router.post("/", authenticateToken, addNote);
router.delete("/:id", authenticateToken, deleteNote);

module.exports = router;

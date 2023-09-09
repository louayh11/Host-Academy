const express = require("express");
const Categoryrouter = express.Router();
const {
  addCategory,
  deleteCategory,
  getAllCategories,
} = require("../Controllers/categoryController");

Categoryrouter.post("/categories", addCategory);
Categoryrouter.delete("/categories/:id", deleteCategory);
Categoryrouter.get("/categories", getAllCategories);

module.exports = Categoryrouter;

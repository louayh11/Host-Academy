const firebase = require("../db");
const firestore = firebase.firestore();


const getAllCategories = async (req, res) => {
    try {
      const categoriesRef = firestore.collection("categories");
      const categoriesSnapshot = await categoriesRef.get();
  
      if (categoriesSnapshot.empty) {
        res.status(404).send("No categories found");
        return;
      }
  
      const categoriesArray = [];
  
      categoriesSnapshot.forEach((categoryDoc) => {
        const categoryId = categoryDoc.id;
        const categoryData = categoryDoc.data();
        categoriesArray.push({
          id: categoryId,
          ...categoryData,
        });
      });
  
      res.send(categoriesArray);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

const addCategory = async (req, res) => {
    try {
      const { name, description } = req.body;
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
      console.log("🚀 ~ file: categoryController.js:35 ~ addCategory ~ req.body:", req.body)
  

      

      const categoryQuerySnapshot = await firestore
        .collection("categories")
        .where("name", "==", name)
        .get();
  
      if (!categoryQuerySnapshot.empty) {
        return res.status(400).send("Category with the same name already exists.");
      }
  

      const categoryRef = await firestore.collection("categories").add({
        name,
        description,
      });
  
      res.status(201).send(`Category added with ID: ${categoryRef.id}`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
const deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      const categoryRef = firestore.collection("categories").doc(categoryId);
      const categorySnapshot = await categoryRef.get();
  
      if (!categorySnapshot.exists) {
        return res.status(404).send("Category not found");
      }
  
      await categoryRef.delete();
  
      res.send("Category deleted successfully");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
  addCategory,
  deleteCategory,
  getAllCategories
};

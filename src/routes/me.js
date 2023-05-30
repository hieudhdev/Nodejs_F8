const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeControllers');

// newController.index trỏ vào cái properties của class NewsController, nó là cái handle //

router.get('/stored/courses', meController.storedCourses); 
router.get('/trash/courses',meController.trashCourses);




module.exports = router;

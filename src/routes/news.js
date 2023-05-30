const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsControllers');

// newController.index trỏ vào cái properties của class NewsController, nó là cái handle //
router.get('/:slug', newsController.showSlug);  // /:slug phải nằm trước / vì nó chỉ cần match route là lọt vào
router.get('/', newsController.news);           // route '/' này là đã trỏ vào /news rồi 




module.exports = router;



/*  router.use thay thế cho đoạn code dưới: 
app.get('/', (req, res) => {
    res.render('home');                 
})
*/
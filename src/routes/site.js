const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteControllers');

// siteController.search/home trỏ vào cái properties của class SiteController, nó là cái handle //
router.use('/search', siteController.search);  
router.use('/', siteController.home);


module.exports = router;



/*  router.use thay thế cho đoạn code dưới: 
app.get('/', (req, res) => {
    res.render('home');                 
})
*/

class NewsControllers {                 // ES6 //
    
    // [GET]  /news
    news(req, res) {          // đây vẫn là function (contructor function) 
        res.render('news');
    }

    // [GET] /news/:slug
    showSlug(req, res) { 
        res.send('<h1>News Detail!!</h1>');
    }
    
}

module.exports = new NewsControllers;       // export NewsController

// Require để dử dụng: const newController = require('./NewsController');

// QUY TẮC ĐẶT TÊN:
// Tên của class (hoặc contructor function) thường viết hoa mỗi chữ cái đầu của biến (NewsController)
// Vì dùng từ khóa new để exports nên bây giờ class NewControllers đã trở thành 1 đối tượng...
// ...thì khi require để dùng thì đặt tên nó như 1 biến (newController)

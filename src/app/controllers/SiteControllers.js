// import model
const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose'); // import 1 property của obj.

class SiteControllers {                 // ES6 //
    
    // [GET]  /
    home(req, res, next) {          // đây vẫn là function (contructor function) 
        
        Course.find({})             // Theo mongoose: có 2 cách là callback và promise, đây là cách promise
            .then(courses => {
                //NOTE: xử lý lỗi gây ra bởi bảo mật của thư viện handlebars
                // Duyệt qua cái obj course, biến tấu nó thành 1 cái gì đó khác 
                // courses = courses.map(course => course.toObject());

                res.render('home', {   // NOTE: courses này k phải là tham số, nó là collection trong database (mongodb)
                    courses: mutipleMongooseToObject(courses)      // ES6: enhandced object literals
                });

            })
            .catch(next)                           // .catch nhận vào 1 func, next là 1 func 
        
        //res.render('home');
        
    }

    // [GET] /search
    search(req, res) { 
        res.render('search');
    }
    
}

module.exports = new SiteControllers;       // export SiteController

// Require để dử dụng: const siteController = require('./SiteController');

// QUY TẮC ĐẶT TÊN:
// Tên của class (hoặc contructor function) thường viết hoa mỗi chữ cái đầu của biến (SiteController)
// Vì dùng từ khóa new để exports nên bây giờ class SiteControllers đã trở thành 1 đối tượng...
// ...thì khi require để dùng thì đặt tên nó như 1 biến (siteController)

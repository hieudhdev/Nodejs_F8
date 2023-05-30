// import model
const Course = require('../models/Course');

const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose'); // import 1 property của obj.


class MeControllers {                 // ES6 //

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>                          // destructuring    [ES6]
                res.render('me/stored-courses',  {
                    deletedCount,                                       // enhandced obj literals [ES6]
                    courses: mutipleMongooseToObject(courses),
                })
            )   
            .catch(next);
            
        /*  Vì ở đây dùng promise (bất đồng bộ) nên phải gộp chung 2 phần lại với nhau
        Course.countDocumentsDeleted()      // đếm số khóa học trong thùng rác
            .then((deletedCount) => {

            })
            .catch(() => {})

        Course.find( {} )  // obj này là một condition, nếu trong db k có field deletedAt hoặc null, thì sẽ k hiện thị trên ui
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
        */
    }
    
    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted( {} )  
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
    
}

module.exports = new MeControllers;       // export SiteController


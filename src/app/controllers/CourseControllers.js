// import model
const Course = require('../models/Course');

const { mongooseToObject } = require('../../util/mongoose'); // import 1 property của obj.


class CourseControllers {                 // ES6 //

    // [GET] /courses/:slug
    show(req, res, next) { 

        Course.findOne({ slug: req.params.slug })       //req.params.slug: Bài 14,16
            .then(course => {
                res.render('courses/show', { 
                    course: mongooseToObject(course)    // ES6: enhanded object liternal
                });            // ES6: enhanded object literal
            })
            .catch(next)

        //res.send('Course Detail!!!');

    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store                        // lấy dữ liệu lưu vào db
    store(req, res, next) {                 
        req.body.img = `https://img.youtube.com/vi/${req.body.videoId}/1.jpg`         // trong js thì dùng $ để xài document trong db  
        const course = new Course(req.body);        // schema(model) phải định nghĩa hết các field cần lấy
        course.save()
            .then(() => res.redirect('/me/stored/courses'))          // chuyển hướng từ sever về trang chủ (đọc doc express)
            .catch(err => {

            });
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)       //req.params.slug: Bài 14,16
            .then(course => res.render('courses/edit', { 
                course: mongooseToObject(course)    
            }))
            .catch(next)
    }   // => nguyên đống này có tác dụng gửi biến course sang view (handlebars)

    // [PUT] /courses/:id
    update(req, res, next) {        // update course trong db (đọc DOC mà làm nhé)
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {       // delete course trong db (dọc DOC mà làm nhé)
        Course.delete({ _id: req.params.id }, req.body)   // xóa bằng plug in (soft delete)
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id }, req.body)   // xóa bằng plug in (force delete)
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    // [PATCH] /courses/:id/restore  --> Patch restore viết ở MeController mà viết ở đây vì nó tác động vào db (courses là model)
    // Khi click vào nút khôi phục, submit form PATCH
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })   
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        res.json(req.body);
    }

}

module.exports = new CourseControllers;       // export SiteController


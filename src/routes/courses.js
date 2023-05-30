const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseControllers');


router.get('/create', courseController.create);         // tạo khóa học

router.post('/store',courseController.store);           // kho khóa học

router.post('/courses/handle-form-actions',courseController.handleFormActions);            // hành động xóa tất cả

router.get('/:id/edit',courseController.edit);       // :id tức là param của url, lấy trong model của db (chỉnh sửa)

router.put('/:id',courseController.update);         // Phương thức PUT để update khóa học

router.delete('/:id',courseController.delete);

router.get('/:slug',courseController.show); // chỉ là 1 dấu / vì đã đây là route con, router mẹ ở index.js(routes)

router.patch('/:id/restore',courseController.restore);    //  Lấy dữ liệu từ db nên tạo 1 router ở đây

router.delete('/:id/force',courseController.forceDelete);    


module.exports = router;

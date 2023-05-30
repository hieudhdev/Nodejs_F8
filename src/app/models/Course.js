// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');   
const Schema = mongoose.Schema;

// import library 
var mongooseDelete = require('mongoose-delete');       // soft delete 

const Course = new Schema({
    name: { type: String, maxlength: 255},
    description: { type: String, maxlength: 600},
    img: { type: String, maxlength: 255},
    slug: {type: String, slug: 'name', unique: true},
    videoId: { type: String, maxlength:255},
    level: { type: String, maxlength:255},
    //createdAt: { type: Date, default: Date.now},
    //updatedAt: { type: Date, default: Date.now},
    deletedAt: {},
    
}, {
    timestamps: true,       // tự động tạo createdAt, updatedAt (tính năng của mongoose)
});

// add plugin      
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' });     // softdelete, override (all methods)

module.exports = mongoose.model('Course', Course);

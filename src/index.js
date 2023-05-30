const express = require('express');
const morgan = require('morgan');          // require vào đây để xài morgan npm //
const app = express();
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const port = 3000;

app.use(methodOverride('_method'));

// import route 
const route = require('./routes');      // tự động trỏ vào index.js

// import db
const db = require('./config/db');
// connect to db 
db.connect();                           // db export từ ./config/db là obj 

// Khi dùng đến file tĩnh thì nó trỏ đến folder public 
app.use(express.static(path.join(__dirname, 'public')))   // Note: __dirname ở đây là path trỏ vào public //
    
//(urlencoded và json) method POST có body (dùng middleware) như 1 obj để trỏ vào lấy dữ liệu, giống query của GET //
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// HTTP logger 
app.use(morgan('combined'));

// Template engine handlebars express
app.engine('hbs', handlebars({
  extname: 'hbs',                    // config đuôi cho file handlebars thành hbs cho ngắn gọn // 
  helpers: {
    sum: (a, b) => a+b,              // fix index đánh từ 1 ở file stored-courses
  }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


// Routes initial 
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})


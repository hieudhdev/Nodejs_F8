const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    
    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);
    
    app.use('/me', meRouter);

    app.use('/', siteRouter);               // router '/' luôn đặt cuối cùng
    //NOTE: vì home và search cùng nằm chung trong site.js nên route search là con của route home //

}

module.exports = route;

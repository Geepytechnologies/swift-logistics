const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const serviceRouter = require('./routes/service');
const priceRouter = require('./routes/price');
const contactRouter = require('./routes/contact');
const blogRouter = require('./routes/blog');
const singleRouter = require('./routes/single');



app.use('/',indexRouter)
app.use('/about',aboutRouter)
app.use('/service',serviceRouter)
app.use('/price',priceRouter)
app.use('/contact',contactRouter)
app.use('/blog',blogRouter)
app.use('/single',singleRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
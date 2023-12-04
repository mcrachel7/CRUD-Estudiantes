const express = require('express');
const path = require('path');
const morgan = require ('morgan'); 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const { json } = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users'); 
const app = express(); 

//settings
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs'); 

//middleware
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/users', users);

app.use((req, ress, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next (err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message; 
    res.locals.error = req.app.get('env') === 'development' ? err:{}; 

    res.status(err.status || 500);
    res.render('error'); 
}); 

app.listen(app.get('port'), ()=> {
console.log('server on port', app.get('port')); 
}); 

module.exports = app; 


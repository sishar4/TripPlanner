var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');

var routes = require('./routes');

var app = express();

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({
	cache: false
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/public'));
app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/', routes);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render(
        // ... fill in this part
    );
});

var server = app.listen(3000, function() {
	console.log("Server listening on port 3000");
});



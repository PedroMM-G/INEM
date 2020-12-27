const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
//const expressValidator = require('express-validator');
const mainRoutes = require('./routes/main.routes.js');

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());


app.use('/', mainRoutes);

app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!');
});

//app.use(expressValidator());
app.use(cors());
app.use(cookieParser());

app.use(function(req, res, next) {
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        var randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2, randomNumber.length);
        res.cookie('cookieName', randomNumber, {
            maxAge: 900000,
            httpOnly: true,
            secure: true
        });
        console.log('cookie created successfully');
    }
    else {
        console.log('cookie exists', cookie);
    }
    next();
});


module.exports = app;












/*const express = require('express');
const port = process.env.PORT || 8080;

//carregar bibliotecas globais

const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const rout = require('./routes/main.routes.js');

//iniciar a aplicação

var app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.listen(port, function(err) {
    if (!err) {
        console.log('Port ' + port);
    }
    else { console.log(err); }
});
//forçar utilização das bibliotecas
app.use(cors());
app.use(cookieParser());
app.use('/', rout);
module.exports = app;






/*const express= require('express');
const app= express();
const port= process.env.PORT || 8080; 
const occurRout = require('./routes/main.routes.js');
//const sanitize = require ('sanitize');

console.log('ola');


app.listen(port, function() {
  console.log('Example app listening on port '+port+ '!');
});

app.use('/', occurRout);
*/

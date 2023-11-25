const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;

//Connect Mongodb
const db = require('./resource/config/db');
db.connect();
// db.test()
//HTTP logger
app.use(morgan('dev'));

//Upload public file
app.use(express.static(path.join(__dirname, 'public')));

//Template
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Sử dụng bodyParser để đọc dữ liệu từ form
app.use(express.urlencoded({ extended: false }));

//Sử dụng các route
const route = require('./resource/routes');
route.route(app);

app.listen(port, () =>
    console.log(`Server is running on port http://localhost:${port}`),
);

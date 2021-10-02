const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
//Settings
app.set('port',process.env.PORT || 3000);
//Middleware
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/translation',require('./routes/translation.routes'));
//Static files
app.use(express.static(path.join(__dirname,'public')))
//Starting server
app.listen(app.get('port'),()=>{
    console.log(`URL: http://localhost:${app.get('port')}`)
})
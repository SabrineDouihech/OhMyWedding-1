var express = require('express');
var app = express();
var port = 3000;
var weddingRoutes = require('./server/routes/wedding.routes');


app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.use('/', weddingRoutes);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const weddingRoutes = require('./server/routes/wedding.routes');


const db = require('./db/index')

db.authenticate().then(()=>{
    console.log('Database connected')
}).catch(err =>{
    console.log('Error:' + err)
})


const app = express();



app.use(bodyParser.json({limit:'50mb'}))
app.use(express.urlencoded({ extended:true, limit:'50mb' }));
app.use(cors("*"))

app.use('/', weddingRoutes);

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const userRoutes = require('./routes/user.routes');


const db = require('../db/index')
const Dressing = require('../models/Dressing')
// const Admin = require('../models/Admin')

db.authenticate()
    .then(() => {
        console.log('Database connected')
        return db.sync({ force: true });
    }).then(()=>{
        const dressing =  Dressing.create({ name: 'suite'});
    })
    .catch(err => {
        console.log('Error:' + err)
    })

const app = express();



app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"))

app.use('/', userRoutes);

console.log(db.models)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
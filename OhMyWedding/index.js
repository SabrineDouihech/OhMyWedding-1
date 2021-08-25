const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const userRoutes = require('./routes/user.routes')
const packagesRouter = require('./routes/packages.routes');

const db = require('../db/index');

db.authenticate()
    .then(() => {
        console.log('Database connected')
        return db.sync({ force: true });
    }).then(() => {
        const dressing = Dressing.create({ name: 'suite' });
    })
    .catch(err => {
        console.log('Error:' + err)
    })

const app = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"))

app.use('/', packagesRouter);





db.authenticate().then(() => {
    console.log('Database connected')
    return db.sync({ force: true })
}).then(() => {
    const reservation = Reservation.create({ total: 50000, rest: 40000 });

})
    .catch(err => {
        console.log('Error:' + err)
    })

console.log(db.models)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})






// const pack1 = Packages.create({image:"https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package1",price:"50000 dinars", persons:"100 person"})
//     const pack2 = Packages.create({image:"https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package2",price:"30000 dinars", persons:"100 person"})
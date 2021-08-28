const express = require('express');
const db = require('../db/index');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 3000;


app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"))

const userRoutes = require('./routes/user.routes')
const packagesRouter = require('./routes/packages.routes');
const adminRouter = require('./routes/admin.routes');

// const Admin = require ('../models/Admin');
// const Packages = require ('../models/Packages');
const reservationRoutes = require('./routes/reservation.routes')
const carsRoutes = require('./routes/cars.routes')
const hostsRoutes = require('./routes/hosts.routes')
const CardsRoutes = require('./routes/InvitionCards.routes')




db.authenticate()
    .then(() => {
        console.log('Database connected')
        return db.sync();
    // }).then(async () => {
    //     try {
    //         // const pack1 = await Admin.create({adminname:'majdi10',password:'1230s'})
    //         // const pack2 = await Packages.create({image:"https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package2",price:30000, persons: 100})
    //         console.log('dummy data created');
    //     } catch (e) { console.error(e) }
    })
    .catch(err => {
        console.log('Error:' + err)
    })





app.use('/api/packages', packagesRouter);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRouter)

app.use("/", reservationRoutes);
app.use("/", carsRoutes);
app.use("/", hostsRoutes);
app.use("/", CardsRoutes);











console.log(db.models)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})






// const pack1 = Packages.create({image:"https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package1",price:"50000 dinars", persons:"100 person"})
//     const pack2 = Packages.create({image:"https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",name:"Package2",price:"30000 dinars", persons:"100 person"})
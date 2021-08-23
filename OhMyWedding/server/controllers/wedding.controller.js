var db = require('../../db');


// // get request parameters

// var SelectAll = function (req, res){
//     db.query('SELECT * FROM packages', (err, data) => {
//         if(err) throw err;
//         res.send(data);
//     })
// }


// // post request parameters

// var Create = function (req, res){
//     var package = req.body
//     db.query('INSERT INTO packages (name, image, description, price) VALUES (?, ?, ?, ?)',[package.name, package.image, package.description, package.price],(err,data)=>{
//         if(err) throw err;
//         res.send(data);
//     })
// }


// // delete request

// var Deleted = function (req, res){
//     var DelPackage = req.params.id
//     db.query('DELETE FROM packages WHERE id=?',DelPackage,(err, data)=>{
//         if(err) throw err;
//         res.send({message:'deleted'});
//     })
// }


// // update request parameters

// var Updated = function (req, res){
//     db.query('UPDATE packages SET (name=?, image=?, description=?, price=?) WHERE id=?',[req.body.name,req.body.image,req.body.description,req.body.price,req.params.id],(err, result)=>{
//         if(err) throw err;
//         res.send({message:'updated'});
//     })
// }



// module.exports = { SelectAll, Create, Deleted, Updated }








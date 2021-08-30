var db = require("../../db");
const Admin = require("../../models/Admin");
const { Op } = require("sequelize");

const AdminLogin = async function (req, res) {
  Admin.findAll({
    where: {
      [Op.and]: [
        { adminname: req.body.adminname },
        { password: req.body.password },
      ],
    },
  }).then((data) => {
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send({ message: "access denied" });
    }
  });
  res.send("data");
};

module.exports = { AdminLogin };

// try {
//     console.log(req.body);
//     const data = await Admin.findAll({
//         where: {
//             [Op.and]: [
//                 { adminname: req.body.adminname },
//                 { password: req.body.password }
//             ]
//         }
//     })
//     if (data.length > 0) {
//         res.send(data)
//     } else {
//         res.send({ message: 'access denied' })
//     }
// } catch (err) {
//     res.status(500).send(err)
// }

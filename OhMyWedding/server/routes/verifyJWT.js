const jwt = require("jsonwebtoken");
const { user: User } = require("../../config/db.confing");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (!token) throw new Error("No Token Provided");

    const { id } = jwt.verify(token, process.env.DB_SECRET);
    if (!id) throw new Error("Invalid Token");

    const user = User.findByPk(id);
    if (!user) throw new Error("Invalid Token");
    req.user = user;
    next();
  } catch (e) {
    return res.status(403).json({
      auth: false,
      message: e.msg || "Un Authorized",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    const { user } = req;
    const roles = await user.getRoles();
    if (!roles.includes("Admin")) throw new Error("Unauthorized");
    next();
  } catch (e) {
    return res.status(403).json({
      auth: false,
      message: e.msg || "Un Authorized",
    });
  }
};

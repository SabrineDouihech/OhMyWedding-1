const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const upload = multer({ dest: "uploads" });

cloudinary.config({
    cloud_name: "unsplashclone",
    api_key: "181682594916931",
    api_secret: "RJUn_vM_yWc3eLxDQ9B2mhgdCi0",
});
module.exports = upload
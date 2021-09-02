const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "unsplashClone",
    api_key: "181682594916931",
    api_secret: "RJUn_vM_yWc3eLxDQ9B2mhgdCi0",
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "upload",
    },
});

const upload = multer({ storage: storage });
module.exports = upload
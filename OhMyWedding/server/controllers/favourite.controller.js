var Favourite = require ('../../models/Favourite')


const addToFavorite = async function (req, res) {
      const favoritePackage = {
        
      };
      try {
        const favorite = await Favourite.create(favoritePackage);
        res.status(200).send(favorite);
      } catch (error) {
        res.status(200).send(error);
      }
    };
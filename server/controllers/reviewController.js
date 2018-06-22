require(`dotenv`).config();

const axios = require("axios");

const getPlaceId = (req, res, next) => {



  const { placeInfo } = req.params;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${info}&key=${
        process.env.API_KEY
      }`
    )
    .then(results => { 
      idName = results.data.results.place_id;
      res.status(200).json(idName);
    })
    .catch(error => console.log(error));
};
module.exports = { getPlaceId };
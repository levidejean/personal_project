require(`dotenv`).config();

const axios = require("axios");

const getData = (req, res, next) => {
  const { info } = req.params;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${info}&key=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then(results => {
      let restaurants = results.data.results;
      // console.log(restaurants);
      res.status(200).json(restaurants);
    })
    .catch(error => console.log(error));
};
// const getImg = (req, res) => {
//   console.log(req.query);
//   axios
//     .get(
//       `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${
//         req.query.photoreference
//       }&key=${process.env.REACT_APP_API_KEY}`
//     )
//     .then(response => {
//       console.log(`img:`, response.data);
//       res.status(200).json(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// };

module.exports = { getData };

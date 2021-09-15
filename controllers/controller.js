const Series = require("../models/tvseries");

class TVController {
  static getSeries(req, res, next) {
    Series.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static createSeries(req, res, next) {
    const data = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: Number(req.body.popularity),
      tags: req.body.tags,
    };

    Series.create(data)
      .then((response) => {
        res.json(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updateSeries(req, res, next) {
    const updateData = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: Number(req.body.popularity),
      tags: req.body.tags,
    };
    Series.update(req.params.id, updateData).then((response) => {
      res.json(response);
      console.log(response);
    });
  }

  static deleteSeries(req, res, next) {
    Series.remove(req.params.id).then((response) => {
      res.json(response);
      console.log(response);
    });
  }
}

module.exports = TVController;

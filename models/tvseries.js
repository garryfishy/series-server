const { getDatabase } = require("../config/mongo");
const { ObjectId } = require("mongodb");
class Series {
  static find() {
    return getDatabase()
      .collection("Series")
      .find()
      .toArray()
      .then((response) => {
        return response;
      });
  }

  static create(payload) {
    return getDatabase()
      .collection("Series")
      .insertOne(payload)
      .then((response) => {
        return response;
      });
  }

  static update(id, payload) {
    return getDatabase()
      .collection("Series")
      .updateOne({ _id: ObjectId(id) }, { $set: payload })
      .then((response) => {
        return response;
      });
  }

  static remove(id) {
    return getDatabase()
      .collection("Series")
      .findOneAndDelete({ _id: ObjectId(id) })
      .then((response) => {
        return response;
      });
  }
}

module.exports = Series;

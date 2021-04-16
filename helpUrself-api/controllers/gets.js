const db = require("../models");


const getIndex = (req, res) => {
  db.aGet.find({}, (err, foundGets) => {
    if (err) {
      console.log("Error in gets#index:", err);
      return res.status(500).json({ message: "Error. Please try again." });
    }

    if (!foundGets.length) {
      return res.status(200).json({ message: "No GETS Found in database." });
    }

    res.status(200).json({ gets: foundGets });
  });
};

const getShow = (req, res) => {
  db.aGet.findById(req.params.id, (err, foundGet) => {
    if (err) console.log("Error in gets#show:", err);

    if (!foundGet) {
      return res
        .status(200)
        .json({ message: "GET with provided ID is not found." });
    }
  
    res.status(200).json({ get: foundGet });
  });
};

const getCreate = (req, res) => {
  db.aGet.create(req.body, (err, savedGet) => {
    if (err) console.log("Error in gets#create:", err);

    res.status(201).json({ get: savedGet });
  });
};

const getUpdate = (req, res) => {
  db.aGet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedGet) => {
      if (err) console.log("Error in gets#update:", err);

      if (!updatedGet) {
        return res.status(200).json({
          message: "GET with provided ID could not be found for update.",
        });
      }

      res.status(200).json({ get: updatedGet });
    }
  );
};

const getDestroy = (req, res) => {
  db.aGet.findByIdAndDelete(req.params.id, (err, deletedGet) => {
    if (err) console.log("Error in gets#destroy:", err);

    if (!deletedGet) {
      return res.status(200).json({
        message: "GET with provided ID could not be found for delete.",
      });
    }

    res.status(200).json({ give: deletedGet });
  });
};

module.exports = {
  getIndex,
  getShow,
  getCreate,
  getUpdate,
  getDestroy,
};

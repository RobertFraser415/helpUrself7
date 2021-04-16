const db = require("../models");

const giveIndex = (req, res) => {
  db.Give.find({}, (err, foundGives) => {
    if (err) {
      console.log("Error in gives#index:", err);
      return res.status(500).json({ message: "Error. Please try again." });
    }

    if (!foundGives.length) {
      return res.status(200).json({ message: "No GIVEs Found in database." });
    }

    res.status(200).json({ gives: foundGives });
  });
};

const giveShow = (req, res) => {
  db.Give.findById(req.params.id, (err, foundGive) => {
    if (err) console.log("Error in gives#show:", err);

    if (!foundGive) {
      return res
        .status(200)
        .json({ message: "GIVE with provided ID is not found." });
    }

    res.status(200).json({ give: foundGive });
  });
};

const giveCreate = (req, res) => {
  console.log('hits the controller ')
  db.Give.create(req.body, (err, savedGive) => {
    if (err) console.log("Error in gives#create:", err);

    res.status(201).json({ give: savedGive });
  });
};

const giveUpdate = (req, res) => {
  db.Give.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedGive) => {
      if (err) console.log("Error in GIVEs#update:", err);

      if (!updatedGive) {
        return res.status(200).json({
          message: "GIVE with provided ID could not be found for update.",
        });
      }

      res.status(200).json({ give: updatedGive });
    }
  );
};

const giveDestroy = (req, res) => {
  console.log('hits the controller destroy function')
  db.Give.findByIdAndDelete(req.params.id, (err, deletedGive) => {
    if (err) console.log("Error in gives#destroy:", err);

    if (!deletedGive) {
      return res.status(200).json({
        message: "GIVE with provided ID could not be found for delete.",
      });
    }

    res.status(200).json({ give: deletedGive });
  });
};

module.exports = {
  giveIndex,
  giveShow,
  giveCreate,
  giveUpdate,
  giveDestroy,
};

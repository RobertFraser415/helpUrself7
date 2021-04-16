const db = require("../models");

const userIndex = (req, res) => {
  db.User.find({}, (err, foundUsers) => {
    if (err) {
      console.log("Error in users#index:", err);
      return res.status(500).json({ message: "Error. Please try again." });
    }

    if (!foundUsers.length) {
      return res.status(200).json({ message: "No Users Found in database." });
    }

    res.status(200).json({ users: foundUsers });
  });
};

const userShow = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) console.log("Error in users#show:", err);

    if (!foundUser) {
      return res
        .status(200)
        .json({ message: "USEr with provided ID is not found." });
    }

    res.status(200).json({ user: foundUser });
  });
};

const userCreate = (req, res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log("Error in users#create:", err);

    res.status(201).json({ give: savedUser });
  });
};

const userUpdate = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) console.log("Error in USERs#update:", err);

      if (!updatedUser) {
        return res.status(200).json({
          message: "User with provided ID could not be found for update.",
        });
      }

      res.status(200).json({ user: updatedUser });
    }
  );
};

const userDestroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log("Error in users#destroy:", err);

    if (!deletedUser) {
      return res.status(200).json({
        message: "User with provided ID could not be found for delete.",
      });
    }

    res.status(200).json({ user: deletedUser });
  });
};

module.exports = {
  userIndex,
  userShow,
  userCreate,
  userUpdate,
  userDestroy,
};

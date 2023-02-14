const User = require("../../models/user");

const userRegister = async (req, res) => {
  try {
    const check = await User.exists({ userName: req.body.userName });
    // console.log(check);
    if (check) {
      return res.status(409).json("Email already in use");
    }
    const data = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      category:req.body.category,
      mobile: req.body.mobile,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (err) {
    return res.status(500).send("Something went wrong. Please try again");
  }
};

module.exports = userRegister;

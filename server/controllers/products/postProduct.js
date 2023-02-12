const Product = require("../../models/Product");

const postProduct = async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Product({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
      category: req.body.category,
      owner: req.body.owner,
      year: req.body.year,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = postProduct;

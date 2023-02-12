const Articles = require("../../models/articles");

const postArticle = async (req, res) => {
  try {
    const file = req.files.image;
    const data = new Articles({
      name: req.body.name,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
      category: req.body.category,
      Author: req.body.Author,
      year: req.body.year,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postArticle;

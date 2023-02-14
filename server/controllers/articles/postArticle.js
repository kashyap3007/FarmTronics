const Articles = require("../../models/articles");

const postArticle = async (req, res) => {
  try {
    const file = req.files.file;
    const data = new Articles({
      name: req.body.title,
      image: {
        data: file.data,
        contentType: "image/png/jpg/jpeg",
      },
      details: req.body.details,
      category: req.body.category,
      Author: req.body.author,
    });
    const dataToSave = await data.save();
    const src= `data:image/png;base64,${Buffer.from(
      dataToSave.image.data
    ).toString("base64")}`;
    const sendData= {name: dataToSave.name,details: dataToSave.details, category: dataToSave.category, src, Author: dataToSave.Author, year: dataToSave.year, src} 
    res.status(200).json(sendData);
    // console.log("Success!");
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = postArticle;

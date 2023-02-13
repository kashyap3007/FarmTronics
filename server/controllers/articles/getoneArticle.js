const Articles = require("../../models/articles");

const getoneArticle = async (req, res) => {
  try {
    // console.log(req.params.id);
    let info = await Articles.findById(req.params.id);
    const src = `data:image/png;base64,${Buffer.from(info.image.data).toString(
      "base64"
    )}`;
    let value = {
      id: info._id,
      src,
      name: info.name,
      details: info.details,
      category: info.category,
      Author: info.Author,
      year: info.year,
    };

    res.json(value);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getoneArticle;

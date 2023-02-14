const Articles = require("../../models/articles");

const getArticle = async (req, res) => {
  try {
    // console.log("we got it");
    let data = await Articles.find();
    // console.log(data);
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        likes: info.likes,
        name: info.name,
        details: info.details,
        category: info.category,
        Author: info.Author,
        year: info.year,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getArticle;

const Articles = require("../../models/articles");

const updateArticle = async (req, res) => {
  try {
    const user = await Articles.findById(req.params.id);

    if (req.body.image) {
      const file = req.files.image.data;
      const { password, ...others } = req.body;
      //   console.log(others);
      const updatedData = others;
      const id = req.params.id;

      const options = { new: true };
      const result = await Articles.findByIdAndUpdate(
        id,
        { ...updatedData, image: file },
        options
      );
      res.send(result);
    } else {
      const { password, ...others } = req.body;

      const updatedData = others;
      const id = req.params.id;
      const options = { new: true };
      const result = await Articles.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = updateArticle;

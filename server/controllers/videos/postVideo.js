const Video = require("../../models/videos");

const postVideo = async (req, res) => {
  try {
    const data = new Video({
      name: req.body.name,
      url: req.body.url,
      details: req.body.details,
      category: req.body.category,
      posted: req.body.posted,
    });

    const dataToSave = await data.save();
    res.status(200).json(data);
    console.log("Success!");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = postVideo;

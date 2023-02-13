const Video = require("../../models/videos");

const getoneVideo = async (req, res) => {
  try {
    // console.log(req.params.id);
    let info = await Video.findById(req.params.id);
    res.json(info);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getoneVideo;

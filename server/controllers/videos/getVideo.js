const Video = require("../../models/videos.js");

const getVideo = async (req, res) => {
  try {
    let data = await Video.find({});
    data = data.map((info) => {
      return {
        id: info._id,
        url: info.url,
        name: info.name,
        details: info.details,
        category: info.category,
        posted: info.posted,
      };
    });
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getVideo;

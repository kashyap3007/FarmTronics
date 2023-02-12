const express = require("express");
const router = express.Router();

const videosControllers = require("../controllers/videos/videoController.js");

router.post("/video/post", videosControllers.postVideo);
router.get("/video/get", videosControllers.getVideo);
router.get("/video/get/:id", videosControllers.getoneVideo);

module.exports = router;

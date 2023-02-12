const Product = require("../../models/Product");

const getProduct = async (req, res) => {
  try {
    let data = await Product.find();
    data = data.map((info) => {
      const src = `data:image/png;base64,${Buffer.from(
        info.image.data
      ).toString("base64")}`;
      return {
        id: info._id,
        src,
        name: info.name,
        details: info.details,
        category: info.category,
        owner: info.owner,
        year: info.year,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getProduct;

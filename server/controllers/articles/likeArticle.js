const Articles = require("../../models/articles");

const likeArticle = async(req, res) => {
  try {
    const {id}= req.params;
    console.log(req.body);
    const {userId}= req.body;
    // console.log(typeof(userId));
    const article=await Articles.findById(id);
    // console.log(userId);
    // console.log(data);
    const findIndex= article.likes.includes(id);
    if(!findIndex){
        // console.log("I m inside");
        article.likes.push(userId);
    }
    Articles.findByIdAndUpdate(id, article, {new : true} , (err , updatedData)=>{
        if(!err){
            res.status(200).json({message: "Liked Successfully"});
        }
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({message: error.message});
  }
};

module.exports = likeArticle;
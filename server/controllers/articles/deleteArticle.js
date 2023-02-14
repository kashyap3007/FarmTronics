const Articles = require("../../models/articles");

const deleteArticle = async (req, res) => {
  try {
    const {id}= req.params;
    Articles.deleteOne({_id: id}, (err)=>{
        if(!err){
            console.log("successfully Deleted");
            res.status(200).json({message: "Deleted Succsessfully"});
        }else{
            console.log("Error occured");
            res.status(301).json({message: "Error occured in deleting"});
        }
    });
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

module.exports = deleteArticle;
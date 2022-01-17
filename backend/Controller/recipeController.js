const router = require("express").Router();
const Recipe = require("../model/recipeModel")
//const {v4:} // have to add auto increment id

//create router for add new recipe
router.post("/addRecipe",async (req,res)=>{
    //const recId = //add auto increment id
    const recName = req.body.recName;
    const recIng = req.body.recIng;
    const recDes = req.body.recDes;

const newRecipe = new Recipe({
    //recId,
    recName,
    recIng,
    recDes
})
try {
    Recipe.find({ nic: newRecipe.nic }, async (err, doc) => {
        if (Object.keys(doc).length == 0) {

            try {
                let response = await newRecipe.save();
                if (response)
                    //console.log(doc);
                    return res.status(201).send({ message: "new Recipe Added" });
            } catch (err) {
                //console.log("error while saving");
                return res.status(500).send({ status: "Internal Server Error" });
            }
        }
        else {
            //console.log("nic found")
            return res.status(400).send({ status: "User already exist!" });
        }
    });
} catch (err) {
    console.log("error", err)
}
});

const router = require("express").Router();
const Recipe = require("../model/recipeModel")
const { v4: uuidv4 } = require("uuid");

//create router for add new recipe
router.post("/recipe/save",async (req,res)=>{
    console.log("ddd",req.body);
    const recId = uuidv4();
    const recName = req.body.recName;
    const recIng = req.body.recIng;
    const recDes = req.body.recDes;


const newRecipe = new Recipe({
    recId,
    recName,
    recIng,
    recDes
})
try {
    Recipe.find({ recId: newRecipe.recId }, async (err, doc) => {
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
            return res.status(400).send({ status: "User already exist!" });
        }
    });
} catch (err) {
    console.log("error", err)
}
});

//router for retrieve data for cretaed recipes
router.get("/recipe/get",async (req,res) => {

    try{
        const response = await Recipe.find();
        return res.status(200).send({
            status:"Success",
            data: response
        });
    }catch(error){
        console.log("Something went wrong while DB connection");
        return { ok: false};
    }
});

//router for update recipe details
router.put("/recipe/update/:recId",async (req,res) =>{
    const recId = req.params.recId;

    const{
        recName,
        recIng,
        recDes
    } = req.body;

    const Payload = {
        recName,
        recIng,
        recDes,
    }
    console.log("id123",recId);

    if(recId){
        const response = await Recipe.findOneAndUpdate({recId: recId }, Payload).then(() =>{
            return res.status(200).send({
                status:"Recipe Successfully Updated!!"
            });
        }).catch((err) =>{
            return res.status(500).send({
                status:"Internal server Error"
            });
        })
    }
    return res.status(400).send({
        status:"Invalid Request"
    })
})

//router for delete a recipe
router.post("/recipe/delete/:recId",async (req,res) =>{
    const recpId = req.params.recId;
    if(recpId){
        const response = await Recipe.findOneAndDelete({recId: recpId}).then(() =>{
            return res.status(200).send({
                status: "Delete Succesfull"
            });
        }).catch((err) =>{
            return res.status(500).send({
                status:"Internal server Error"
            });
        })
    }
    return res.status(400).send({
        status:"Invalid Request"
    })
});
    
module.exports = router;



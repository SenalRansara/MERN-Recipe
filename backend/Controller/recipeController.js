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

//router for retrieve data for cretaed recipes
router.get("/getRecipe",async (req,res) => {

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
router.put("/updateRecipe/:recId",async (req,res) =>{
    const recId = req.params.recId;

    const{
        recName,
        recIng,
        recDes
    } = req.body;

    if(recId){
        const response = await Recipe.findOneAndUpdate({recId: recId }).then(() =>{
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
router.post("/removeRecipe",async (req,res) =>{
    const recpId = req.body.recId;
    if(employeeId){
        const response = await Recipe.findByIdAndDelete({recId = recpId}).then(() =>{
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
    



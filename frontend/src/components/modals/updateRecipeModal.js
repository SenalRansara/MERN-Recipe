//modal popup for update recipe
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";

import{updateRecipe} from "../service/recipeService"

function UpdateRecipe(props) {

    console.log("yoy ",props);
    useEffect(()=>{
        setRecipeName(props.data.recName);
        setIngredients(props.data.recIng);
        setDes(props.data.recDes);
    },[])

    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [des, setDes] = useState("");

    function sendData(e){
        e.preventDefault()
        const Payload = {
            recName:recipeName,
            recIng:ingredients,
            recDes:des
        }
        updateRecipe(props.data.recId,Payload).then((res)=>{
            if(res.ok){
                alert("Recipe Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Add new Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={sendData} action="post">
                            <div class="form-group">
                                <label for="recipeName">Recipe Name</label>
                                <input type="text" class="form-control" id="recipeName" value= {recipeName} placeholder="Enter Recipe" onChange={(e) => {setRecipeName(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="ingredients">Ingredients</label>
                                <input type="text" class="form-control" id="ingredients" value= {ingredients} placeholder="Ingredients" onChange={(e) => {setIngredients(e.target.value)}}/>
                            </div>
                            <div class="form-group">
                                <label for="des">Description</label>
                                <input type="text" class="form-control" id="des" value={des} placeholder="Enter Recipe" onChange={(e) => {setDes(e.target.value)}}/>
                            </div>
                            <button type="submit" class="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            
        </div>
    )
}

export default UpdateRecipe;

import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import {Link} from "react-router-dom";

import { getAllRecipe,deleteRecipe } from "../service/recipeService";

import AddRecipe from "../modals/addRecipeModal";
import UpdateRecipe from "../modals/updateRecipeModal";
import Header from "../Header";


export default function RecipeView() {


const [recipe, setRecipe] = useState([]);
const [addRecipeModal, setRecipeModal] = useState(false);
const [updateRecipeModal, setUpdateRecipeModal] = useState(false);
const [updateData, setUpdateData] = useState();
const [Data, setData] = useState();



  //creting a method for retrieve data
useEffect(() => {
    getAllRecipe().then((res)=>{
        if(res.ok){
            setRecipe(res.data);
        }
        else{
            setRecipe([]);
        }
    })
}, []);

  //Delete method implementation
function onDelete(data) {
    const recId = data.recId;
    let text = "Are you sure want to delete the Recipe?";
        if (window.confirm(text) == true) {
            deleteRecipe(recId).then((res)=>{
                if(res.ok){
                    alert("Recipe Deleted Successfully");
                    window.location.reload();
                }else{
                    alert("Something Went Wrong");
                }
            });
        } else {
            window.location.reload();
}
};

//creating function for add a recipe
const addRecipe = () =>{
    setRecipeModal(true);
}


  //adding components to the page body
    return (
    /* side navigtaion bar components*/
    <div className="container" id="height">

        {/* implementing the meterial table for display data */}

        <div className="BillPaymentTable">
        <div style={{ textAlign: "right"}}>
            <button className="btn btn-success" style={{ margin: "10px"}} onClick={() => addRecipe()}>
                Add a Recipe
            </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="Recipe"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateRecipeModal(true);
                setUpdateData(rowData);
            },
            },
        ]}
        columns={[
            { title: "Recipe Name", field: "recName", type: "string" },
            { title: "Ingredients", field: "recIng", type: "string" },
            { title: "Description", field: "recDes", type: "string" }

        ]}
        data={recipe}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        actions={[
            {
                
                icon: () => (
                    // <Link to ={{pathname:"/ViewRecipe", query:Data}}>
                    // <Link to ={`/ViewRecipe/${Data.recName}/${Data.recIng}/${Data.recDes}`}>
                    <button className="btn btn-sm btn-success">View</button>
                    // </Link>
                ),
                onClick: (event, rowData) => {
                    setData(rowData);
                },
                },
            {
                
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateRecipeModal(true);
                setUpdateData(rowData);
            },
            },
            {
            icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
            onClick: (event, rowData) => {
                onDelete(rowData);
            },
            },
        ]}
        
        />
    </div>
    <div>
    <Modal show={addRecipeModal} onHide={()=>{
        setRecipeModal(false)
    }}>
        <Modal.Body>
        <AddRecipe
            onHide={()=>{
                setRecipeModal(false)
            }}
        />
        </Modal.Body>
    </Modal> 

    <Modal show={updateRecipeModal} onHide={()=>{
        setUpdateRecipeModal(false)
    }}>
        <Modal.Body>
        <UpdateRecipe
            data={updateData}
            onHide={()=>{
                setUpdateRecipeModal(false)
            }}
        />
        </Modal.Body>
    </Modal> 

    </div>
    
    </div>
    
    );
}


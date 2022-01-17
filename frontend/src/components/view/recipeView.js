import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";

import { createRecipe,getAllRecipe,updateRecipe,deleteRecipe } from "../service/recipeService";


export default function RecipeView() {


const [recipe, setRecipe] = useState([]);

const [modalBillUpdate, setModalBillUpdate] = useState(false);
const [currentBillUpdate, setCurrentBillUpdate] = useState();

const [modalBillDelete, setModalBillDelete] = useState(false);
const [currentBillDelete, setCurrentBillDelete] = useState();



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
function onDelete() {
    
}

  //adding components to the page body
    return (
    /* side navigtaion bar components*/
    <div className="container" id="height">
        <div>
        <div className="area"></div>
        
        </div>


        {/* implementing the meterial table for display data */}

        <div className="BillPaymentTable">
        <MaterialTable style={{background:"#E3ECFF"}}
        title="Recipe"
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
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setCurrentBillUpdate(rowData);
                setModalBillUpdate(true);
            },
            },
            {
            icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
            onClick: (event, rowData) => {
                setCurrentBillDelete(rowData._id);
                setModalBillDelete(true);
            },
            },
        ]}
        
        />
    </div>
    <div>
    {/* <Modal show={modalBillUpdate}>
        <Modal.Body>
        <EditBillForm
            data={currentBillUpdate}
            data01={() => setModalBillUpdate(false)}
        />
        </Modal.Body>
    </Modal> */}

    <Modal show={modalBillDelete}>
        <Modal.Body>
        <p>Are you want to delete this item ?</p>
        <button type="button" className="btn btn-success mr-3" onClick={onDelete}>
            Delete Item
        </button>
        <button
            type="button"
            className="btn btn-danger"
            onClick={() => setModalBillDelete(false)}
        >
            Cancel
        </button>
        </Modal.Body>
    </Modal>
    </div>
    <button className="btn btn-success"
    style={{ marginBottom: "20px" }}>
        <a
            href="#"
            style={{ textDecoration: "none", color: "white" }}
        >
            {" "}
            Add Bill details
        </a>
        </button>


    </div>
    
    );
}


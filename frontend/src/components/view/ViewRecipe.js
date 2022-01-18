import React from 'react'
import { useParams } from 'react-router-dom';



function ViewRecipe({match, Data}) {
    let{name,ing,des} = useParams();

    console.log("dataaaaa", {name, ing, des});
    console.log("awa",Data);
    return (
        <div>
            <h1>senal</h1>
        </div>
    )
}

export default ViewRecipe

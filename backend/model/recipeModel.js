const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({

    recId: { type: String },
    recName: { type: String },
    recIng: { type: String },
    recDes: { type: String }

});

const  Recipe = mongoose.model('Recipe',RecipeSchema)
module.exports = Recipe;
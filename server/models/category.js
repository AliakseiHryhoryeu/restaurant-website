const { Schema, model } = require("mongoose")


const movieSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: File, required: false },
    productsId: { type: Array, required: true }

})


module.exports = model('category', categorySchema)
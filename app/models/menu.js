const mongoose = require('mongoose')
const Schema = mongoose.Schema


const menuSchema = new Schema({
    name: {type:String, required:true},
    image: {type:String , required:true},
    description:{type:String , required:true},
    review: {type:String },
    price: {type:Number , required:true}
})

module.exports = mongoose.model('indoorPlant', menuSchema)
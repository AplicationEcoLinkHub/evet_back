const mongoose =require('mongoose')
const Schema =mongoose.Schema

const EventSchema = new Schema({

    title:{
        type:String,required: true
    },
    date:{
        type:String,required: true
    },
    time:{
        type:String,required: true
    },
    description:{
        type:String,required: true
    },
   

},{timestamps: true});

const Event = mongoose.model('Evenement', EventSchema);
module.exports = Event;
import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    task_name:String,
    completed:{
        type:Boolean,
        default:false,
    },
});

const taskModel=mongoose.model("Task",taskSchema);


export default taskModel;
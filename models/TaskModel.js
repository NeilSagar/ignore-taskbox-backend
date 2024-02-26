import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    task_name:String
});

const taskModel=mongoose.model("Task",taskSchema);


export default taskModel;
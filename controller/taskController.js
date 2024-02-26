import mongoose from "mongoose";

import taskModel from "../models/TaskModel.js";



export const getAllTasks=async(req,res)=>{
    try {
        const response=await taskModel.find({});
        res.status(201).json({message:response});
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}
export const addTask=async(req,res)=>{
    const taskInfo=req.body;
    const newTask=new taskModel(
        {
            task_name:taskInfo.task
        }
    );
    try {
        const response=await newTask.save();
        res.status(201).json({message:response});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const deleteTask=async(req,res)=>{
    const task_name=req.params.task;
    try {
        const response=await taskModel.deleteOne({task_name:task_name});
        res.status(201).json({message:response});
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}
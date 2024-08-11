import Task from "../modle/user.js";
import cron from 'node-cron';
import { updateTasksBasedOnDeadline,calculateDeadline } from '../constant/timeout.js';

cron.schedule('0 * * * *', () => {
    console.log('Running scheduled task to update tasks based on deadline');
    updateTasksBasedOnDeadline();
});


export const handleCreateTask = async (req, res) => {
    try {
        // const { title, description, category, duration } = req.body;
        const createdAt = new Date();
        const { title, description,durationInHours} = req.body;
            if (!title || !description || !durationInHours) {
                return res.status(404).json({
                    success: false,
                    message: "please provide all the fields"
                })
            }
        const deadline = calculateDeadline(createdAt, durationInHours);
        const newTask = new Task({
            title,
            description,
            durationInHours,
            createdAt,
            deadline
        });
        const savedTask = await newTask.save();
        res.status(200).json({
            success: true,
            message: "task created successfully",
            savedTask
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "something went wrong while createing a new task"
        })
    }
}


export const handleGetAllTask = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json({
            success: true,
            task,
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}


export const handleGetTaskById = async (req, res) => {
    try {
        const trackId = req.params.id;
        const task = await Task.findById(trackId);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Please provide a valid Id"
            })
        }
        res.status(200).json({
            success: true,
            message: "Your Task is here",
            task,
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}


export const handleDeleteData = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "invalid task id",
            })
        }
        res.status(200).json({
            success: true,
            message: "task deleted successfully",
            task
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "something went wrong while fatching data"
        })
    }
}

export const handleTaskUpdate = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedData = req.body;
        console.log("your task id is", taskId);

        const updateTask = await Task.findOneAndUpdate(
            { _id: taskId }, 
            updatedData,
            { new: true } 
        );
        

        if (!updateTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }
        

        res.status(200).json({
            success: true,
            message: "task updated successfully"
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "something went wrong while updating the task"
        });
    }
    
}
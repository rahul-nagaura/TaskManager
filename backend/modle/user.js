import mongoose from 'mongoose';

// Helper function to get default deadline (e.g., 7 days from now)
const getDefaultDeadline = () => {
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + 7); // Set deadline to 7 days from now
    return deadlineDate;
};

// Mongoose schema definition
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        enum: ['All Active Task', 'Done', 'Expired'],
        default: 'All Active Task'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    durationInHours: {
        type: Number,
    },
    deadline: {
        type: Date,
        default: getDefaultDeadline 
    }
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;

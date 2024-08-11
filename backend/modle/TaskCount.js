import mongoose from 'mongoose';

const TaskCountSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['To Do', 'Expired'],
        required: true,
    },
    count: {
        type: Number,
        default: 0
    }
});

const TaskCount = mongoose.model('TaskCount', TaskCountSchema);
export default TaskCount;

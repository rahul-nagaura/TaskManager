import moment from 'moment';
import Task from '../modle/user.js';

export const calculateDeadline = (createdAt, durationInHours) => {
    return moment(createdAt).add(durationInHours, 'hours').toDate();
};

export const updateTasksBasedOnDeadline = async () => {
    try {
        const now = new Date(); // Current time
        const tasks = await Task.find();

        for (const task of tasks) {
            if (task.deadline && now > task.deadline) {
                await Task.findByIdAndUpdate(
                    task._id,
                    { category: 'Expired Task' }, // Update to 'Timeout' or any other logic
                    { new: true }
                );
            }
        }

        console.log('Tasks updated based on deadline');
    } catch (error) {
        console.error('Error updating tasks based on deadline:', error.message);
    }
};



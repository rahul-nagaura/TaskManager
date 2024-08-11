import express from 'express';
import Task from '../modle/user.js';
import { 
    handleGetAllTask,
    handleGetTaskById,
    handleCreateTask,
    handleTaskUpdate,
    handleDeleteData
    } from '../controllers/index.js';
const router = express.Router();

router.post("/", handleCreateTask);

router.get('/status-counts', async (req, res) => {
    try {
        const expiredCount = await Task.countDocuments({ category: 'Expired' });
        const activeCount = await Task.countDocuments({ category: 'All Active Task' });
        const doneCount = await Task.countDocuments({ category: 'Done' });

        res.status(200).json({
            expired: expiredCount,
            active: activeCount,
            done: doneCount,
        });
    } catch (error) {
        console.error('Error fetching task counts:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Example route to fetch tasks by status
router.get('/status/:status', async (req, res) => {
    try {
        const { status } = req.params;
        const tasks = await Task.find({ category: status }, 'title description');
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks by status:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});




router.get("/", handleGetAllTask);

router.get("/:id", handleGetTaskById);

router.put("/:id", handleTaskUpdate);

router.delete("/:id", handleDeleteData);





export default router;


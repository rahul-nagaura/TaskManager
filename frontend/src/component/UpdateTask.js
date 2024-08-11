import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateTask = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('AllActiveTask');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`/tasks/${id}`);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setCategory(response.data.category);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleUpdateTask = async () => {
        try {
            const response = await axios.put(`/tasks/${id}`, {
                title,
                description,
                category
            });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <>
            <div className='bg-gray-600 border border-black h-[100vh]'>
                <div className='text-center text-4xl font-bold mt-10'>
                    <h1>Create new task</h1>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <form className='flex flex-col' >
                        <div className='flex flex-col'>
                            <label className='text-white text-2xl m-2' htmlFor="title">Title:</label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                value={title}
                                id='title'
                                onChange={(e) => setTitle(e.target.value)}
                                className='h-10 w-[50vw] border-none m-2 px-6 rounded-md text-lg'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white text-2xl m-2' htmlFor="des">Description:</label>
                            <textarea
                                placeholder="Task Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id='des'
                                rows="4"
                                cols="22"
                                className='w-[50vw] border-none m-2 py-2 px-6 rounded-md text-lg'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}
                                className='h-10 w-[50vw] border-none m-2 px-6 rounded-md text-lg'>
                                <option value="AllActiveTask">All Active Task</option>
                                <option value="Done">Done</option>
                                <option value="Expired">Expired</option>
                            </select>
                        </div>
                        <button
                            type='submit'
                            onClick={handleUpdateTask}
                            className=' py-2 bg-blue-600 rounded-md m-2 text-white font-medium text-xl'>Create Task</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateTask;

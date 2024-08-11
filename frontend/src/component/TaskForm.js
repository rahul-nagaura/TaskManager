import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [durationInHours, setdurationInHours] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            durationInHours,
        };
        try {
            const response = await axios.post('/tasks/', newTask);
            navigate('/success');
            console.log("Task created:", response.data);
            setError("");
        } catch (error) {
            if (error.response) {
                setError(`Error: ${error.response.data.message || "An error occurred while creating the task."}`);
            } else if (error.request) {
                setError("Error: No response received from the server.");
            } else {
                setError(`Error: ${error.message}`);
            }
        }
        
    }

    return (
        <div className='bg-gray-600 border border-black h-[100vh]'>
            <div className='text-center text-4xl font-bold mt-10'>
                <h1>Create new task</h1>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='text-white text-2xl m-2' htmlFor="title">Title:</label>
                        <input
                            type='text'
                            placeholder='Enter your Title'
                            id='title'
                            value={title}
                            className='h-10 w-[50vw] border-none m-2 px-6 rounded-md text-lg'
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-2xl m-2' htmlFor="durationInHours">durationInHours:</label>
                        <input
                            type='number'
                            placeholder='Enter Number of hours do you require'
                            id='durationInHours'
                            value={durationInHours}
                            className='h-10 w-[50vw] border-none m-2 px-6 rounded-md text-lg'
                            onChange={(e) => setdurationInHours(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-2xl m-2' htmlFor="des">Description:</label>
                        <textarea
                            placeholder='Enter your Description'
                            id='des'
                            rows="4"
                            cols="22"
                            value={description}
                            className='w-[50vw] border-none m-2 py-2 px-6 rounded-md text-lg'
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className=' py-2 bg-blue-600 rounded-md m-2 text-white font-medium text-xl'>Create Task</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskForm;

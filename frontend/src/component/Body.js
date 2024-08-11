import React, { useEffect, useState } from 'react';
import icon1 from '../images/Expired.png';
import icon2 from '../images/icons2.png';
import icon3 from '../images/icons.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskCard from './Taskcard';

const Body = () => {
    const [expiredTasks, setExpiredTasks] = useState([]);
    const [activeTasks, setActiveTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [counts, setCounts] = useState({
        expired: 0,
        active: 0,
        done: 0
    });

    const navigate = useNavigate();

    // Fetch task counts and tasks by status when component mounts
    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                // Fetch task counts
                const countsResponse = await axios.get('/tasks/status-counts');
                setCounts({
                    expired: countsResponse.data.expired || 0,
                    active: countsResponse.data.active || 0,
                    done: countsResponse.data.done || 0,
                });

                // Fetch tasks by status
                const expiredResponse = await axios.get('/tasks/status/Expired');
                setExpiredTasks(expiredResponse.data);

                const activeResponse = await axios.get('/tasks/status/All Active Task');
                setActiveTasks(activeResponse.data);

                const doneResponse = await axios.get('/tasks/status/Done');
                setDoneTasks(doneResponse.data);

            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };

        fetchTaskData();
    }, []);

    const handleButtonClick = () => {
        navigate('/todo');
    };

    return (
        <div className='grid grid-cols-12 px-10 h-[608px] overflow-hidden mt-[120px]'>
            <div className='col-span-2'>
                <div className='grid grid-rows-4 gap-4 justify-center mx-8'>
                    <div className="w-[268px] h-[166px] p-[18px_43px_24px_18px] gap-[10px] rounded-[14px] bg-[#ECEDEE] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-[46px] h-[46px] p-[12px_0px_0px_0px] gap-[10px] rounded-[26px] bg-[#F42D20] flex justify-center items-center">
                            <img src={icon1} alt="Expired Tasks Icon" className="w-[22px] h-[22px] mb-4" />
                        </div>
                        <div className="inline-flex flex-col gap-[10px] min-w-[95px] min-h-[73px]">
                            <div className="w-full h-[21px] text-[#797979] text-[14px] font-[500] leading-[21px] flex items-center justify-center px-1">
                                Expired Tasks
                            </div>
                            <div className="w-[18px] h-[42px] text-[#060606] text-[28px] font-[500] leading-[42px] tracking-[0.01em] text-left flex items-center justify-center">
                                {counts.expired}
                            </div>
                        </div>
                    </div>
                    <div className="w-[268px] h-[166px] p-[18px_43px_24px_18px] gap-[10px] rounded-[14px] bg-[#ECEDEE] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-[46px] h-[46px] p-[12px_0px_0px_0px] gap-[10px] rounded-[26px] bg-[#E89271] flex justify-center items-center">
                            <img src={icon2} alt="Active Tasks Icon" className="w-[22px] h-[22px] mb-4" />
                        </div>
                        <div className="inline-flex flex-col gap-[10px] min-w-[95px] min-h-[73px]">
                            <div className="w-full h-[21px] text-[#797979] text-[14px] font-[500] leading-[21px] flex items-center justify-center px-1">
                                All Active Tasks
                            </div>
                            <div className="w-[18px] h-[42px] text-[#060606] text-[28px] font-[500] leading-[42px] tracking-[0.01em] text-left flex items-center justify-center">
                                {counts.active}
                            </div>
                        </div>
                    </div>
                    <div className="w-[268px] h-[166px] p-[18px_43px_24px_18px] gap-[10px] rounded-[14px] bg-[#ECEDEE] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-[46px] h-[46px] p-[12px_0px_0px_0px] gap-[10px] rounded-[26px] bg-[#70A1E5] flex justify-center items-center">
                            <img src={icon3} alt="Completed Tasks Icon" className="w-[22px] h-[22px] mb-4" />
                        </div>
                        <div className="inline-flex flex-col gap-[10px] min-w-[95px] min-h-[73px]">
                            <div className="w-full h-[21px] text-[#797979] text-[14px] font-[500] leading-[21px] flex items-center justify-center px-1">
                                Completed Tasks
                            </div>
                            <div className="w-[18px] h-[42px] text-[#060606] text-[28px] font-[500] leading-[42px] tracking-[0.01em] text-left flex items-center justify-center">
                                {counts.done}
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-[268px] h-[48px] pt-[6px] pr-[14px] pb-[6px] pl-[12px] gap-[6px] rounded-[19px] bg-[#0D062D] text-white"
                        style={{ transitionDuration: '0ms' }}
                        onClick={handleButtonClick}
                    >
                        <i className="fa-solid fa-plus px-2"></i>
                        Add Task
                    </button>
                </div>
            </div>
            <div className='col-span-8 grid grid-cols-9 gap-4 justify-evenly'>
                <div className="flex justify-between">
                    <div className="w-[354px] ml-16 mr-4 h-[590px] px-[15px] py-[20px] rounded-[10px] bg-[#ECEDEE] shadow-[0px_4px_4px_#00000040]">
                        <div className='flex border-[3px] border-b-blue-700 pb-2 border-l-[0] border-t-[0] border-r-[0] flex justify-center items-center'>
                            <p className='h-[10px] w-[10px] bg-blue-500 rounded-3xl '></p>
                            <h3 className="text-lg font-bold px-2"> Expired</h3>
                            <span className='h-[20px] w-[20px] rounded-3xl bg-[#E0E0E0] flex items-center justify-center'>
                                {counts.expired}
                            </span>
                        </div>
                        {expiredTasks.map((task, index) => (
                            <div key={index} className="relative w-[314px] bg-white shadow-md opacity-100 rounded-3xl my-6">
                                <div className='p-2'>
                                    <div className='flex justify-between px-4 pt-4 pb-2'>
                                        <p className='p-1 bg-[#cae6ca] text-green-600 px-2 rounded-md font-medium'>{counts.done ? "Completed" : "hone"}</p>
                                        <p className='text-xl'>...</p>
                                    </div>
                                    <div className='flex justify-between flex-col px-4 py-2'>
                                        <h3 className="text-md font-semibold text-2xl">{task.title}</h3>
                                        <p>{task.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[354px] h-[590px] mx-8 px-[15px] py-[20px] rounded-[10px] bg-[#ECEDEE] shadow-[0px_4px_4px_#00000040]">
                        <div className='flex border-[3px] border-b-orange-500 pb-2 border-l-[0] border-t-[0] border-r-[0] flex justify-center items-center'>
                            <p className='h-[10px] w-[10px] bg-orange-500 rounded-3xl '></p>
                            <h3 className="text-lg font-bold px-2">On Progress</h3>
                            <span className='h-[20px] w-[20px] rounded-3xl bg-[#E0E0E0] flex items-center justify-center'>
                                {counts.active}
                            </span>
                        </div>
                        {activeTasks.map((task, index) => (
                            <div key={index} className="relative w-[314px] bg-white shadow-md opacity-100 rounded-3xl my-6">
                                <div className='p-2'>
                                    <div className='flex justify-between px-4 pt-4 pb-2'>
                                        <p className='p-1 bg-[#cae6ca] text-green-600 px-2 rounded-md font-medium'>{task.durationInHours === 5 ? "high" : "Low"}</p>
                                        <button className='text-xl' >...</button>
                                    </div>
                                    <div className='flex justify-between flex-col px-4 py-2'>
                                        <h3 className="text-md font-semibold text-2xl">{task.title}</h3>
                                        <p>{task.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[354px] h-[590px] mx-4 px-[15px] py-[20px] rounded-[10px] bg-[#ECEDEE] shadow-[0px_4px_4px_#00000040]">
                        <div className='flex border-[3px] border-b-green-500 pb-2 border-l-[0] border-t-[0] border-r-[0] flex justify-center items-center'>
                            <p className='h-[10px] w-[10px] bg-green-500 rounded-3xl '></p>
                            <h3 className="text-lg font-bold px-2">Completed Tasks</h3>
                            <span className='h-[20px] w-[20px] rounded-3xl bg-[#E0E0E0] flex items-center justify-center'>
                                {counts.done}
                            </span>
                        </div>
                        {doneTasks.map((task, index) => (
                            <div key={index} className="relative w-[314px] bg-white shadow-md opacity-100 rounded-3xl my-6">
                                <div className='p-2'>
                                    <div className='flex justify-between px-4 pt-4 pb-2'>
                                        <p className='p-1 bg-[#cae6ca] text-green-600 px-2 rounded-md font-medium'>{counts.done ? "Completed" : "hone"}</p>
                                        <p className='text-xl'>...</p>
                                    </div>
                                    <div className='flex justify-between flex-col px-4 py-2'>
                                        <h3 className="text-md font-semibold text-2xl">{task.title}</h3>
                                        <p>{task.description}</p>
                                        <p>{task.deadline}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;




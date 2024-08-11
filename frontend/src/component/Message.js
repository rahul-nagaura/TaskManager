import React from "react";
import { useNavigate } from "react-router-dom";
const Message = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    return (
        <div className="h-[227px] w-[315px] bg-[#FFFFFF] rounded-3xl flex flex-col items-center justify-center m-16 border-[1px] border-black">
            <div className="h-[100px] w-[100px]">
                <div className="h-[83.33px] w-[83.33px] bg-black rounded-3xl flex justify-center items-center">
                    <i className="fa-solid fa-check text-5xl font-bold text-white"></i>
                </div>

            </div>
            <div>
                <h1 className="text-lg font-medium text-center font-cs">new task has been created
                    successfully</h1>
            </div>
            <button
                className="w-[268px] h-[48px] pt-[6px] pr-[14px] pb-[6px] pl-[12px] gap-[6px] rounded-[19px] bg-black text-white text-white"
                style={{ transitionDuration: '0ms' }}
                onClick={handleBack}
            >
                Back
            </button>
        </div>
    )
}

export default Message;
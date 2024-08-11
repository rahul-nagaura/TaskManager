import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';

const TaskCard = ({ title, description, deadline }) => {
    return (
        <div className="relative w-[314px] h-[169px] bg-white border border-b-green-700 shadow-md opacity-100">
            <div className="absolute top-[106px] left-[40px] w-[76px] h-[23px] bg-gray-200 rounded-tl-md opacity-100 flex items-center justify-center text-black text-sm">
                
            </div>

            {/* Top Right Corner Text */}
            <div className="absolute top-[105px] left-[298px] w-[16px] h-[19px] bg-[#0D062D] text-white text-xs flex items-center justify-center opacity-100">
                {/* Replace with your text */}
                {/* Example count or identifier */}
                1
            </div>

            {/* Heading */}
            <h3 className="absolute top-[133px] left-[40px] w-[164px] h-[22px] bg-[#0D062D] text-white text-lg font-semibold flex items-center justify-center opacity-100">
                Mobile App Design
            </h3>

            {/* Description */}
            <p className="absolute top-[224px] left-[40px] w-[261px] h-[16px] text-gray-600 text-sm opacity-100">
                {description}
            </p>

            {/* Deadline */}
            <div className="absolute bottom-[10px] left-[40px] text-gray-500 text-xs">
                Deadline: {deadline}
            </div>
        </div>
    );
};

export default TaskCard;

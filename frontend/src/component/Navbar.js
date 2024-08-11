import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="relative">
                <div className="box-011 bg-[#d1d4d6] h-[80px] p-[20px] text-[#ECEDEE] flex justify-between px-6 bg-gray-400 rounded-3xl m-4 fixed top-0 left-0 right-0 box-011">
                    <div className="h-[44px] rounded-[22px] w-[308px] bg-white flex itmes-center px-[12px]">
                        <div className="w-[284px] h-[20px] p-2 rounded-[22px]">
                            <button className="bg-white px-2 rounded-l-[22px] h-[20px]">
                                <i className="fa-solid fa-magnifying-glass text-black"></i>
                            </button>
                            <input type="text" placeholder="search Project"
                                className="px-2 rounded-r-[22px] w-[224px] h-[20px]" />
                        </div>
                    </div>

                    <div>
                    
                        <select className="h-10 text-lg rounded-xl text-black text-md px-2">
                            <option>Home</option>
                            <option>Update</option>
                            <option>Delete</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;
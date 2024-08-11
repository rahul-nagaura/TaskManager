import React from 'react';
import Body from './Body';
import Navbar from './Navbar';
import UpdateTask from './UpdateTask';
const Layout = () => {
    return(
        <>
        <div className='h-[100vh] overflow-hidden'>
            <Navbar />
            <Body />
            {/* <UpdateTask /> */}

        </div>
        </>
    )
}

export default Layout;
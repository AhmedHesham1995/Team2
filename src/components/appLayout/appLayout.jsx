import React from 'react';
import NavBar from '../big/navbar/navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            {/* <NavBar/> */}
            <Outlet/>
        </div>
    );
}

export default AppLayout;

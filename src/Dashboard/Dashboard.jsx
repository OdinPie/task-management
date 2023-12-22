import React from 'react';
import Profile from './Profile';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-black my-10'>Welcome to Dashboard</h1>

            <Profile></Profile>
        </div>
    );
};

export default Dashboard;
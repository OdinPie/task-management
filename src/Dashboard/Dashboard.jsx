import React from 'react';
import Profile from './Profile';
import AddTask from './AddTask';
import Board from './Board';
import TaskDisplay from '../Components/TaskDisplay';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-black my-10'>Welcome to Dashboard</h1>

            <Profile></Profile>
            {/* <Board></Board> */}
            <TaskDisplay></TaskDisplay>
        </div>
    );
};

export default Dashboard;
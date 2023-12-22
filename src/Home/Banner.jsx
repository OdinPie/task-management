import React from 'react';
import Lottie from "lottie-react";
import task from '../../src/assets/task.json'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
        <div className='flex justify-between items-center'>
            <div className='text-right'>
                <h1 className='text-8xl font-bold text-blue-800'>Give Us</h1>
                <h1 className='text-8xl font-bold text-black'>Your</h1>
                <h1 className='text-8xl font-bold text-red-700'>Headeache</h1><br />
                <p className='text-xl font-bold text-black'>Plan your task efficiently so that you don't miss any deadlines!</p>
            </div>
            <div>
                <Lottie animationData={task} loop={true}></Lottie>
            </div>
            </div>
            <div className='flex justify-center'>
                
                <Link to='/register'><button className="btn animate-pulse bg-yellow-400 text-black">Let's Explore!</button></Link>
            </div>
            </div>
    );
};

export default Banner;
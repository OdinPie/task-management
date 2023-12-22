import React from 'react';

const Usability = () => {
    return (
        <div className='py-20'>
            <h1 className='text-center text-blue-900 font-bold text-4xl'>Who can Use this?</h1>
            <h1 className='text-center font-bold text-2xl'>Our services are used by,</h1>
            <div className='flex gap-14 justify-center text-5xl my-10 border-s-4 py-3 border border-blue-300 rounded-lg'>
                <div>
                    <strong>300+</strong><br />Students
                </div>
                <div>
                    <strong>500+</strong><br />Developers
                </div>
                <div>
                    <strong>100+</strong><br />MNCs
                </div>
            </div>
        </div>
    );
};

export default Usability;
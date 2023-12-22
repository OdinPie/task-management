import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='max-w-5xl mx-auto flex items-center gap-16'>
            <div className="avatar justify-center">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
            </div>
            </div>
            <div>
            <h1 className='text-3xl text-center font-bold text-blue-800'>{user?.displayName}</h1>
            <h1 className='text-2xl text-center font-bold text-blue-800'>{user?.email}</h1>
            </div>
            
        </div>
    );
};

export default Profile;
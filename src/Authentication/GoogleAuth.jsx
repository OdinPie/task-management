import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';


const GoogleAuth = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const premiumTaken = null;
            const userInfo = {
                email: result.user?.email,
                displayName: result.user?.displayName,
                photoURL: result.user?.photoURL,
                premiumTaken: premiumTaken
            }

            // axiosPublic.post('/users',userInfo)
            navigate('/dashboard');
        })
        
    }

    return (
        <div>
            <div className="divider divider-error">or</div>
            <button onClick={handleGoogle} className='btn w-full'>Google</button>
        </div>
    );
};

export default GoogleAuth;
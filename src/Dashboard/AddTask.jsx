import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const AddTask = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const task = form.task.value;
        const detail = form.detail.value;
        const state = form.state.value;
        const priority = form.priority.value;

        const info = {email,
            task,
            detail,
            state,
            priority} ;
            console.log(info);
        
        axiosPublic.post('/tasks',info)
        .then(res=>console.log(res.data))
        
    }
    
    return (
        <div>
            <h1 className='text-center text-blue-900 font-bold text-4xl py-10'>Add A Task</h1>
            <form className='flex gap-10 items-center justify-center' onSubmit={handleSubmit}>
                <input name='task' placeholder='Name Task' />
                <textarea placeholder='detail' name='detail'></textarea>
                <select name="state" id="">
                    <option value="todo">TO-DO</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                </select>
                <select name="priority" id="">
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                </select>
                <button className="btn"><input type="submit" /></button>
            </form>
        </div>
    );
};

export default AddTask;
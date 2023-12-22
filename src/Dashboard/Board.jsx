import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Row from './Row';

const Board = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        axiosPublic.get('tasks')
        .then(res=>setTasks(res.data))
    },[axiosPublic])
    console.log(tasks);
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table">
            <thead>
            <tr>
                
                <th>TO-DO</th>
                
            </tr>
            </thead>
            <tbody>
                {
                    tasks && tasks.map(task=>{
                        if(task?.state=='todo'){
                            return(
                                <Row task={task}></Row>
                            )
                        }
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default Board;
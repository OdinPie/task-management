import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskDisplay = () => {

    const [complete, setComplete] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    return (
        <DragDropContext>
                <h1 className='text-3xl font-bold text-center'>Your Tasks</h1>
                <div className='flex justify-between items-center'>
                    <TaskCard title={"TO-DO"} tasks={"incomplete"} id={"1"}></TaskCard>
                </div>
        </DragDropContext>
    );
};

export default TaskDisplay;
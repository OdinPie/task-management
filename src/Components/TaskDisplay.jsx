import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskDisplay = () => {

    const [complete, setComplete] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>{
            setComplete(json.filter(task=>task.completed))
            setIncomplete(json.filter(task=>!task.completed))
        })
    },[])

    const handleDragEnd = result =>{

        const {destination, source, draggableId} = result;

        if(source.droppableId == destination.droppableId) return;

        if(source.droppableId == 2){
            setComplete(removeItemById(draggableId, complete));
        } else {
            setIncomplete(removeItemById(draggableId, incomplete));
        }

        const task = findItemById(draggableId, [...incomplete, ...complete]);

        if(destination.droppableId == 2){
            setComplete([{...task, complete: !task.completed}, ...complete])
        } else{
            setIncomplete([{...task, complete: !task.completed}, ...incomplete])
        }

    }

    function findItemById(id, array) {
        return array.find((item) => item.id == id)
    }

    function removeItemById(id, array) {
        return array.filter((item)=> item.id != id);
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
                <h1 className='text-3xl font-bold text-center'>Your Tasks</h1>
                <div className='flex justify-between items-center'>
                    <TaskCard title={"TO-DO"} tasks={incomplete} id={"1"}></TaskCard>
                    <TaskCard title={"DONE"} tasks={complete} id={"2"}></TaskCard>
                    <TaskCard title={"BACKLOG"} tasks={[]} id={"3"}></TaskCard>
                </div>
        </DragDropContext>
    );
};

export default TaskDisplay;
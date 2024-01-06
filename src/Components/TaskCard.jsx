import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import styled from 'styled-components';

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const TaskCard = ({title, tasks, id}) => {
    
    return (
        <div className='taskContainer taskCard'>
            <div className='taskTitle' 
            style={{backgroundColor: "lightblue",
                    position:"stick"
                    }}>
                {title}
            </div>

            <Droppable droppableId={id}>
                    {(provided , snapshot)=>{
                        {return (
                            <TaskList
                        ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {
                                tasks && tasks.length && tasks.map((task, index)=><Task key={index} index={index} task={task}></Task>)
                            }

                           {provided.placeholder} 
                        </TaskList>
                        )}
                        
                    }}
            </Droppable>
        </div>
    );
};

export default TaskCard;
import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";
const Task = ({task, index}) => {

    function bgcolorChange(props) {
        return props.isDragging ?
                "lightgreen"
                : props.isDraggable?
                    props.isBacklog?
                    "#F2D7D5"
                : "#DCDCDC"
                : props.isBacklog?
                 "#F2D7D5"
                : "#EAF4FC";
    }

    const Container = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    `;
    const TextContent = styled.div``;
    // return(
    //     <Container
    //             >
    //                 <div style={{ display: "flex" , justifyContent: "start", padding:2 }}>
    //                     <span>
    //                         <small>
    //                             #{task.id}
    //                             {"  "}
    //                         </small>
    //                     </span>
    //                 </div>

    //                 <div style={{ display: "flex", justifyContent:"center" , padding:2 }}>
    //                     <TextContent>{task.title}</TextContent>
    //                 </div>
    //             </Container>
    // )
    return (
        <Draggable draggableId={`${task.id}`} key={`${task.id}`} index={index}>
            {(provided,snapshot) => {
                {return (
                    <Container
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                >
                    <div style={{ display: "flex" , justifyContent: "start", padding:2 }}>
                        <span>
                            <small>
                                #{task.id}
                                {"  "}
                            </small>
                        </span>
                    </div>

                    <div style={{ display: "flex", justifyContent:"center" , padding:2 }}>
                        <TextContent>{task.title}</TextContent>
                    </div>

                    {provided.placeholder}
                </Container>
                )}
                
            }}
        </Draggable>
    );
};

export default Task;
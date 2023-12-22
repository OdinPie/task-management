import React from 'react';

const Row = ({task}) => {
    return (
        <tr>
        <td>{task.task}</td>
        </tr>
    );
};

export default Row;
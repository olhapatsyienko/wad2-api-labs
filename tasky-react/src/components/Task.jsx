import React from 'react';

const Task = (props) => {
    const getBackgroundColor = () => {
        if (props.done) {
            return 'lightgrey';
        }
        switch(props.priority) {
            case 'high':
                return '#ff6b6b';
            case 'medium':
                return '#ffd93d';
            case 'low':
                return '#6bcf7f';
            default:
                return '#5bb4c4';
        }
    };
    
    return (
        <div className="card" style={{backgroundColor: getBackgroundColor()}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p className="priority">{props.priority}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )

    
}

export default Task;

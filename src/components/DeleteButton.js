import React from 'react';


const DeleteButton = props => (
    <button className="weather-block__delete-btn" onClick={props.deleteFunc}></button>
);

export default DeleteButton;
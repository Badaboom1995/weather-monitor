import React from 'react';
import {addCity} from '../actions/actions.js';

const AddCity = props => {
    return (
      <form action="" className=" addForm" onSubmit={addCity}>
          <legend className='addForm__title'>Add new city</legend>
        <label htmlFor="" className="addForm__field">
            City name: 
          <input name="city" type="text" className="addFrom__input" />
        </label>
        <button className="addForm__button">Add</button>
      </form>
    );
  };

 export default AddCity;
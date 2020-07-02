import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = ( event ) => {
    setInputValue( event.target.value );
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();

    if (inputValue.trim().length > 3) {
      setCategories( ctgries => [inputValue, ...ctgries]);
      setInputValue('');
    }
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" onChange={ handleInputChange } value={ inputValue }/>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  // const handleAdd = () => {
  //   setCategories([...categories, 'HunterXHunter']);
  // }
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <button onClick={ handleAdd } type="button" styleName="width: 2rem; height: 1rem;"> Agregar </button> */}

      <ol>{ categories.map( category => <GifGrid key={ category } category={ category } /> ) }</ol>
      {/* <ol>{ categories.map( category => <li key={ category }>{ category }</li> ) }</ol> */}
    </>
  );
}

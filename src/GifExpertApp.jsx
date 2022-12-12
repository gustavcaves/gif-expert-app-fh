import { useState } from 'react';

import React from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    console.log(categories)

    const onAddCategory = ( newCategory) => {
        // Valorant
        console.log(newCategory)
        // setCategories([...categories, 'Valorant']);
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant']);
    };

  return (
    <>
        {/* titulo */}
        
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />


        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category}</li>
            }) }
            {/* <li>ABC</li> */}
        </ol>
            {/* Gif Item */}

    </>
  )
}

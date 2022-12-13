import { useState } from 'react';

import React from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    console.log(categories)

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory) ) return;

        console.log(newCategory)
        // setCategories([...categories, 'Valorant']);
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [ ...cat, 'Valorant']);
    };

  return (
    <>
        
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
        />


        { categories.map( (category) => (
            <GifGrid 
                key={category} 
                category={category} 
            />
            )) 
        }

    </>
  )
}

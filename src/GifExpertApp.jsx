import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball', 'Rick And Morty', 'One Punch']);

    // console.log(categories)

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

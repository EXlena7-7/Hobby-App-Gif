
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['Taylor Swift']);

   console.log(categories);
  return (
    <>
        <h2>Tienda de Gifs</h2>
        <AddCategory setCategories={ setCategories }/>
        
            <hr />
       
        <ol>
            {
                categories.map(category =>
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                    // <li key={category}>{category}</li>
                )
            }
        </ol>
       
    </>
  )
}

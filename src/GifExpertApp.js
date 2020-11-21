import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const handleadd = () => {
    //     setCategories([...categories, 'One piece']);
    //     // setCategories( cats => [...cats, 'One piece']);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr />

            <div>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </div>
        </>
    );
}

export default GifExpertApp;
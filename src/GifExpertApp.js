import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Footer } from './components/Footer';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Congratulation']);
    const fecha =  new Date().getFullYear();

    // const handleadd = () => {
    //     setCategories([...categories, 'One piece']);
    //     // setCategories( cats => [...cats, 'One piece']);
    // };
    return (
        <>
            <h2 className="titulo">GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />

            <div className="contenido-principal">
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </div>
            <Footer fecha={ fecha }/>
        </>
    );
}

export default GifExpertApp;
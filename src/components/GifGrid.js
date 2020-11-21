import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifts( category );

    // el codigo adentro solo se ejecuta una vez
    // useEffect( () => {
    //     getGifts( category )
    //         .then( imgs => setImages(imgs));
    // }, [ category ]);

    return (
        <>
            <h3>{ category}</h3>

            { loading && <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            }

            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}

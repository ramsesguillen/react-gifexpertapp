export const getGifts = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=Wu11gQtMk4XHBVp3XXe1dBEkerAPXEhd`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
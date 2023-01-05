// import fetch from 'isomorphic-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

// import proxyAgent from 'http-proxy-agent';
// const options = {
// 	agent: new proxyAgent('http://'),
// };

// const res = await fetch('http://api.tvmaze.com/search/shows?q=batman', 
// {agent: new HttpsProxyAgent('<myproxy>')});

// Esta fue la que me sirviop para obtener los datos utilizando el proxy
// const resp = await fetch( url , {agent: new HttpsProxyAgent('<MyProxy>')});

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=a3KBu0lqCOSgx71tDfHAAwZ734xL4iR3&q=${category}&limit=10`
    // const resp = await fetch( url , {agent: new HttpsProxyAgent('<myproxy>')});
    const resp = await fetch( url );

    const { data } = await resp.json();

    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);

    return gifs;
}

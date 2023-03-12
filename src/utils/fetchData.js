 const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export async function fetchData(url){
    const response = await fetch(url,options);
    const data = await response.json()

    return data;
}

 const YoutubeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_VIDEO_KEY,
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
}


export async function fetchDataYouTube(url){
    const response = await fetch(url,YoutubeOptions);
    const data = await response.json()

    return data;
}
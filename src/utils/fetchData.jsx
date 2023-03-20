
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '56b92641ddmshd2f6fc521124e14p1143eejsn700ab7df61b7',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

}


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
}
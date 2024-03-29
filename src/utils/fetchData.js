export const exerciseData = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
};

export const bodyMassData = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
};

export const youtubeData = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

  

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);

    const data = await response.json();

    return data;
}
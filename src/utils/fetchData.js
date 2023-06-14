export const exerciseData = {
    method: 'GET',
    url: 'https://musclewiki.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
};

export const exerciseAttributeData = {
    method: 'GET',
    url: 'https://musclewiki.p.rapidapi.com/exercises/attributes',
    headers: {
        'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
    }
};

export const bmiData = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/bmi',
    headers: {
      'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
};

export const caloriesData = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    headers: {
      'X-RapidAPI-Key': 'c81efb59d7msh199ce1d649db2a8p17b6eajsnad4dd0c527e8',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);

    const data = await response.json();

    return data;
}
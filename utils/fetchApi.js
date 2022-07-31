import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key':
                'e625c3eca0mshc0bcd0d389a9f3ap1f72d3jsncc7e67cfc4ee',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    });
    return data;
};

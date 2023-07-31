import axios from "axios";


export function getNews(category = 'General'){
    const API_Key = `Give your API key here `;
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    

     return axios.get(`${API_Endpoint}&apikey=${API_Key}`)
        
}
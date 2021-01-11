import {MOVIES_LIST, MOVIE_DATA, GET_USERS} from '../types';
import axios from 'axios';


export const getUsersList = () => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
        return response.data;
        
    })

    return {
        type: GET_USERS,
        payload: request
    }

}


export const moviesList = () => {
    return {
        type: MOVIES_LIST,
        payload: [
            {id: 1, name: 'msdhoni'},
            {id: 2, name: 'gopala gopala'},
            {id: 3, name: 'Rambo'}
        ]
    }
}

export const movieData = () => {
    return{
        type: MOVIE_DATA,
        payload:{
            id: 1,
            name: "vakeelsaab",
            director: "venu sriram",
            producer: "dil raju",
            year: 2021
        }
 }
}
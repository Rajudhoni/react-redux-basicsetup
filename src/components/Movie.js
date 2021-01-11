import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {movieData, getUsersList} from '../store/actions';

const Movie = (props) => {
    const movies = useSelector(state => state.movies);
    const users = useSelector(state => state.movies.users);
    const dispatch = useDispatch();

    const getMovieData = () => {
        dispatch(movieData())
    }
    const getUserData = () => {
        dispatch(getUsersList());
    }
    console.log(movies);
    return (
        <>
            {
                movies && movies.movieData ? (
                    <div>
                        name: {movies.movieData.name}
                        director: {movies.movieData.director}
                        producer: {movies.movieData.producer}
                        year: {movies.movieData.year}
                    </div>
                ):null
               
            }
            {
                users ? (
                    users.map(user => {
                        return(
                            <div key={user.id}>
                                <div><b>Name:</b> {user.name}</div>
                                <div><b>username:</b> {user.username}</div>
                                <div><b>Email:</b> {user.email}</div>
                            </div>
                        )
                    })
                ):null
            }
            <button onClick={()=> getMovieData()}>
                Get Movie Data
            </button>
            <button onClick={()=> getUserData()}>
                Get Users
            </button>
        </>
    )
};

export default Movie;
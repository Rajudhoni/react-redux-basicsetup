import React from 'react';
import { moviesList } from '../store/actions';
import { connect } from 'react-redux';

const Home = (props) => {
    console.log(props);
    const {movies} = props;

    const getmoviesHandler = () => {
        props.dispatch(moviesList());
    }
    return(
        <>
            {
                movies && movies.moviesList ?
                 (
                    movies.moviesList.map(movie => (
                        <div key={movie.id}>
                            Movie Name: {movie.name}
                        </div>
                    ))
                 ):null
            }
           <button onClick={() => getmoviesHandler()}>
               Get Movies
           </button>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home);
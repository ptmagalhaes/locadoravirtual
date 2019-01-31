import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SingleMovie extends Component {
    state = {
        movie: {}
    }
    componentDidMount() {
        var id = '';
        if(this.props.location.state){
            id = this.props.location.state.movieId;
        }else{
            id = this.props.match.params.id;
        }
        console.log(id)
        var self = this;
        axios.get("https://www.omdbapi.com/?i=" + id + "&page=1&apikey=66ff68e5")
            .then(function (response) {
                var movie = response.data
                self.setState({
                    movie
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        var movie = this.state.movie;
        return (
            <div className="movie__wrapper" style={{backgroundImage : `linear-gradient(rgba(30, 27, 38, 0.9), rgba(30, 27, 38, 0.9)),url(${movie.Poster})`}}>
                <Grid>
                    <div className="movie" classID="movie-card">
                        <div className="movie__data" classID="movie-data">
                            <div className="movie__poster">
                                <span className="movie__poster--fill">
                                    <img src={ movie.Poster } alt={movie.Title}/>
                                </span>
                                <span className="movie__poster--featured">
                                    <img src={ movie.Poster } alt={movie.Title}/>
                                </span>
                            </div>
                            <div className="movie__details">
                                <h2 className="movie__title">{ movie.Title }</h2>
                                <ul className="movie__tags list--inline">
                                    <li className="movie__rated">{movie.Runtime}</li>
                                    <li className="movie__year">{movie.Year}</li>
                                    <li className="movie__year">{movie.Genre}</li>
                                    <li className="movie__year">{movie.Type}</li>
                                </ul>
                                <p className="movie__plot">{movie.Plot}</p>
                                <div className="movie__credits">
                                    <p><strong>Escrito por:</strong> {movie.Writer}</p>
                                    <p><strong>Direção:</strong> {movie.Director}</p>
                                    <p><strong>Estrelando:</strong></p>
                                    <ul className="movie__actors list--inline">
                                    <li>{movie.Actors}</li>
                                    </ul>
                                    <button className="movie__button">
                                        <Link to="/">Home</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>
            </div>
        );
    }
}

export default SingleMovie;


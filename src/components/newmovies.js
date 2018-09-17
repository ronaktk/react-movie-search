import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './newmovies.css';
class NewMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const key = '75ba52de60388bc096aefda1e8e28e2f';

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => {
            if(response.status !== 200) {
                console.log('Error: ' + response.status);
                return;
            }
            response.json().then(data => {
                const movies = data.results;
                console.log(movies);
                this.setState({movies: movies});
            });
        })
        .catch(error => {
            console.log('Fetch Error: ', error);
        })
    }
    
    render() {
        return(
            <section>
                <h2>Latest Movies</h2>
                <div className="newMovies">
                    {this.state.movies.map((movie, index) => {
                        return(
                            <Link to='/' key={index} className="movieLink">
                                <img src={`https://image.tmdb.org/t/p/w200/${this.state.movies[index].poster_path}`} alt="movie poster"/>
                                <div className="movieInfo">
                                    <h3>{this.state.movies[index].title}</h3>
                                    <p>{this.state.movies[index].release_date}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default NewMovies;
import React, {Component} from 'react';

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
    }
    
    render() {
        return(
            <div>
                <h2>Latest Movies</h2>
                <h3>Movie Name</h3>
                <p>Movie Description</p>
            </div>
        );
    }
}

export default NewMovies;
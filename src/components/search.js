import React from 'react';
import SearchResults from './searchresults';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'searchResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = '75ba52de60388bc096aefda1e8e28e2f';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log('Fetch Error: ', err);
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id="form">
        <img src='' alt="" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
        <SearchResults results={this.state.results} />
      </form>
    );
  }
}

export default Search;
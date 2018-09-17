import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import NewMovies from './components/newmovies';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <NewMovies />
      </div>
    );
  }
}

export default Home;

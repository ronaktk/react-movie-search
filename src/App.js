import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import './App.css';
import NewMovies from './components/newmovies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <NewMovies />
      </div>
    );
  }
}

export default App;

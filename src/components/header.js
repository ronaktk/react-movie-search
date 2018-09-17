import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../header.css';
class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'><h1>Movie Search</h1></Link>
            </header>
        );
    }
}

export default Header;
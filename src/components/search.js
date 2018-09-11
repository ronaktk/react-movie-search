import React, {Component} from 'react';

class Search extends Component {
    render() {
        return(
            <form onSubmit="">
                <input type="text" placeholder="Search a movie" required />
            </form>
        );
    }
}

export default Search;
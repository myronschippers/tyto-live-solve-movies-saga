import React, { Component } from 'react';
import MoviesItem from '../MoviesItem/MoviesItem';

class MoviesList extends Component {
    
    render() {
        const moviesMark = this.props.list.map((item, index) => {
            return <MoviesItem key={index} item={item} />
        });

        return (
            <div>
                <ul>
                    {moviesMark}
                </ul>
            </div>
        );
    }
}

export default MoviesList;

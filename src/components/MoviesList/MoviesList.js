import React, { Component } from 'react';

class MoviesList extends Component {
    
    render() {
        const moviesMark = this.props.list.map((item, index) => {
            return <li key={index}>{item.title}</li>
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

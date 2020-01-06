import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class DetailsPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIE',
            payload: this.props.store.selectedMovie.id
        });
    }

    render() {
        let genresList = this.props.store.selectedMovie.genres.map((item, index) => {
            return <li key={index}>{item.name}</li>
        });

        if (genresList.length === 0) {
            genresList = [
                <li>NO GENRES</li>
            ];
        }

        console.log('Selected Movie');
        return (
            <div>
                <h2>Details Page</h2>

                <h4>{this.props.store.selectedMovie.title}</h4>
                <p>{this.props.store.selectedMovie.description}</p>
                <ul>
                    {genresList}
                </ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DetailsPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MoviesItem extends Component {
    clickToDetails = (event) => {
        const itemId = this.props.item.id;
        this.props.dispatch({
            type: 'SELECT_MOVIE',
            payload: this.props.item,
        });
        console.log('Movie ID: ', itemId);
        this.props.history.push('/details');
    }

    render() {
        return (
            <div onClick={this.clickToDetails}>
                <img src={this.props.item.poster} alt="movie poster" />
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}

export default connect()(withRouter(MoviesItem));

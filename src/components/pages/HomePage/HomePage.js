import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    render() {
        return (
            <div>
                <h2>HOME PAGE</h2>


            </div>
        );
    }
}

export default connect()(HomePage);
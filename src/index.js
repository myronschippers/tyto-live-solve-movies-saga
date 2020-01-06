import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('GET_MOVIES', moviesSaga);
    yield takeLatest('GET_MOVIE', movieSaga);
}

function* moviesSaga() {
    try {
        // yield axios({
        //     method: 'GET',
        //     url: '/api/movies'
        // });
        const response = yield axios.get('/api/movies');
        yield put({
            type: 'SET_MOVIES',
            payload: response.data,
        });
    } catch(err) {
        console.error('Error with movies saga: ', err);
    }
}

function* movieSaga(action) {
    try {
        const response = yield axios.get(`/api/movies/with-genres/${action.payload}`);
        // match with genres
        yield put({
            type: 'SELECT_MOVIE_GENRES',
            payload: response.data,
        });
    } catch(err) {
        console.error(err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovie = (state = { genres: [] }, action) => {
    if (action.type === 'SELECT_MOVIE') {
        return {
            ...action.payload,
            genres: [],
        }; // should be movie object
    }else if (action.type === 'SELECT_MOVIE_GENRES') {
        return {
            ...state,
            genres: [
                action.payload
            ],
        }
    }

    return state;
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

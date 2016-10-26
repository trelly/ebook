/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, ListView, View} from 'react-native';
import {fetchBooks} from './actions';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers/';
import BookList from './pages/';


import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware());

store.dispatch(fetchBooks());


class ebook extends Component {
    render() {
        return (
            <Provider store={store}>
                <BookList />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ebook', () => ebook);

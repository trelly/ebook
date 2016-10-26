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
import BookList from './pages/'

const store = createStore(reducer);

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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, ListView, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../actions';

class BookList extends Component {

    componentWillMount() {
        this.props.actions.fetchBooks();
    }
    renderList(rowData) {
        return <Text>{rowData.BookName}</Text>
    }
    render() {
        let {books} = this.props;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        dataSource = ds.cloneWithRows(books);
        return (
            <View style={styles.container}>
                <ListView style={styles.main} dataSource={dataSource} renderRow={(rowData) => this.renderList(rowData)}/>
                <View style={styles.nav}>
                    <View style={styles.toolbar}>
                        <View style={styles.item}>
                            <Text style={styles.type}>书架</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.type}>书城</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.type}>我的</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    main: {
        flex: 1,
        backgroundColor: 'green'
    },
    nav: {},
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    type: {
        color: 'green',
        height: 50,
        lineHeight: 50
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        resizeMode: 'stretch'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        paddingTop: 10,
        position: 'relative',
        top: 10
    }
});


function stateMapToProps(state) {
    return {books: state.books};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(stateMapToProps, mapDispatchToProps)(BookList);

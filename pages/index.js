/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, ListView, View, TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../actions';

class BookList extends Component {

    componentWillMount() {
        this.props.actions.fetchBooks();
    }
    renderList(rowData) {
        return <TouchableHighlight>
                <View style={styles.bookCard}>
                  <Image source={{uri: rowData.ThumbUrl}} style={{width: 105, height: 140}} />
                  <View style={styles.info}>
                    <Text style={styles.bookName}>{rowData.BookName}</Text>
                    <View style={styles.bookDesc}>
                      <Text ellipsizeMode="tail" style={{width: 240, color: 'gray'}} numberOfLines={5}>{rowData.Abstract}</Text>
                    </View>
                    <Text style={styles.bookInfo}>{rowData.BookName}&nbsp;{rowData.Category}&nbsp;{rowData.ClickRate}人在读</Text>
                  </View>
               </View>
             </TouchableHighlight>
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
        flex: 1
    },
    nav: {},
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#999'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    type: {
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
    },
    bookCard: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f5f6'
    },
    info: {
        paddingLeft: 10,
        flex: 1
    },
    bookName: {
        fontSize: 18
    },
    bookDesc: {
        flex:1,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    wrap: {
        flex: 1,
        flexWrap: 'wrap'
    },
    bookInfo: {
        fontSize: 12,
        color: '#999'
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

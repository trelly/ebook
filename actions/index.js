import {AlertIOS} from 'react-native';
function updateBooks(data) {
    AlertIOS.alert('a'+data.length)
    return {
        type: 'UPDATEBOOKS',
        data: data
    };
}

export function fetchBooks() {
    AlertIOS.alert('safsd');
    return function(dispatch) {
        return fetch('http://toutiao.com/novel_channel/get_category_book_info/?category=%E6%8E%A8%E8%8D%90&index=0', {
            credentials: 'include'
        }).then(response => response.json()).then(json =>dispatch(updateBooks(json)));
    };
}

export default {
    fetchBooks
};

import {AlertIOS} from 'react-native';
function updateBooks(data) {
    return {
        type: 'UPDATEBOOKS',
        data: data
    };
}

export function fetchBooks() {
    return function(dispatch) {
        return fetch('https://toutiao.com/novel_channel/get_category_book_info/?category=%E5%A5%87%E5%B9%BB%E7%8E%84%E5%B9%BB&index=0').then(response => response.json()).then(function (json) {
          dispatch(updateBooks(json));
        });
    };
}

export default {
    fetchBooks
};

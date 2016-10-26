function updateBooks(data) {
    return {
        type: 'UPDATEBOOKS',
        data: data
    }
}

export function fetchBooks(articleId) {
    return function(dispatch) {
        return $.ajax({
            type: 'get',
            url: 'http://toutiao.com/novel_channel/get_category_book_info/?category=%E6%8E%A8%E8%8D%90&index=0',
            dataType: 'json'
        }).then(function(json) {
            dispatch(updateBooks(json));
        });
    };
}

export default {
    fetchBooks: fetchBooks
};

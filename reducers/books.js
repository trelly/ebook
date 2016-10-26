const initialState = [{BookName: 'hello book'}, {BookName: 'A book'}, {BookName: 'Good book'}];

function booksReducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATEBOOKS':
            return Object.assign({}, state, action.data.book_data);
        default:
            return state;
    }
}

export default booksReducer;

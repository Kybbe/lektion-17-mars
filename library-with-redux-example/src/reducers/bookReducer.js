const initialState = {
    selectedBook: {}
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_BOOK':
            return {
                ...state,
                selectedBook: action.payload
            }
        default:
            return state
    }
}

export default bookReducer;
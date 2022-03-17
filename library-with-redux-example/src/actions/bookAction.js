const selectBook = (book) => {
    return {
        type: 'SELECT_BOOK',
        payload: book
    }
}

export { selectBook }
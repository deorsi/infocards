import { CHANGE_SEARCH_FIELD, REQUEST_INFOCARDS_PENDING, REQUEST_INFOCARDS_SUCCESS, REQUEST_INFOCARDS_FAILED } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestInfocards = () => (dispatch) => {
    dispatch({ type: REQUEST_INFOCARDS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_INFOCARDS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_INFOCARDS_FAILED, payload: error }))
}
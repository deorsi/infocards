import { CHANGE_SEARCH_FIELD, REQUEST_INFOCARDS_PENDING, REQUEST_INFOCARDS_SUCCESS, REQUEST_INFOCARDS_FAILED } from './constants'

const initialStateSearch = {
    searchField: ''
}

export const searchInfos = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateInfocards = {
    isPending: false,
    infocards: [],
    error: ''
}

export const requestInfocards = (state=initialStateInfocards, action={}) => {
    switch(action.type) {
        case REQUEST_INFOCARDS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_INFOCARDS_SUCCESS:
            return Object.assign({}, state, { infocards: action.payload, isPending: false })
        case REQUEST_INFOCARDS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;        
    }
}
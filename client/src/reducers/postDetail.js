import * as types from '../actions/actionTypes'

const detailReducer = (post={},action) => {
    switch (action.type) {
        case types.FETCH_POST:
            return action.payload
            
        default:
            return post;
    }
}

export default detailReducer
import * as types from '../actions/actionTypes'

const postReducer = (posts=[], action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return action.payload

        case types.CREATE_POST:
            return [...posts,action.payload]

        case types.DELETE_POST:
            return posts.filter((post) => post._id !== action.payload)

        case types.CHANGE_CATEGORY:
            return action.payload

        case types.UPDATE_POST:
            return posts.map((post) => 
                post._id === action.payload._id ? action.payload:post
            )

    
        default:
            return posts
    }
}

export default postReducer;
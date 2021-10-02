import * as types from '../actions/actionTypes'

const userReducer = (state = {userData:null},action) => {
    switch (action.type) {
        case types.AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {...state,userData:action.payload}

        
        case types.LOGOUT:
            localStorage.removeItem('user')
            return {...state,userData:null}

            default:
                return state
    }
}

export default userReducer
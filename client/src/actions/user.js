import * as types from './actionTypes'
import * as api from '../api/index'


export const signIn = (formData,history) => async (dispatch)=> {
    try {
        const {data} = await api.signin(formData)
        dispatch({
            type:types.AUTH,
            payload:data
        })
        history.push('/')
    } catch (error) {
        console.log(error)
    }

}


export const logOut = (id) => async (dispatch)=> {
   try {
    const {message} = await api.logout(id)
    dispatch({
        type:types.LOGOUT,
        payload:message
    })
   } catch (error) {
       console.log(error)
   }
    
}   
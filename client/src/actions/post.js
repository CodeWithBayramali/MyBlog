import * as api from '../api/index'
import * as types from './actionTypes'

export const fetchPosts = () => async (dispatch)=> {
    try {
      const {data} = await api.fetchPosts();
      dispatch({
          type:types.FETCH_POSTS,
          payload:data
      }) 
    } catch (error) {
        console.log(error)
    }
}

export const fetchPost = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchPost(id);
        dispatch({
            type:types.FETCH_POST,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const changeCategory = (catId) => async(dispatch)=> {
    try {
        const {data} = await api.fetchPosts();
        dispatch({
            type:types.CHANGE_CATEGORY,
            payload: data.filter((cId)=> {return cId.categoryId===catId})
        })
    } catch (error) {
        
    }
}


export const createPost= (post)=> async(dispatch)=> {
    try {
        const {data}= await api.createPost(post)
        dispatch({
            type:types.CREATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const {data} = await api.updatepost(id,post)
        dispatch({
            type:types.UPDATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost= (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({
            type:types.DELETE_POST,
            payload:id
        })
    } catch (error) {
        console.log(error)
    }
}

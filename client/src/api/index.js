import axios from 'axios'

const apiEndpoint ="https://myi-blogg.herokuapp.com/posts/"
const authEndpoint = "https://myi-blogg.herokuapp.com/user"
const contactEndpoint = "https://myi-blogg.herokuapp.com/contact"

export const fetchPosts = async ()=> await axios.get(apiEndpoint)

export const createPost = async (post)=> await axios.post(apiEndpoint,post)

export const fetchPost = async (id) => await axios.get(`${apiEndpoint}/${id}`)

export const deletePost = async (id) => await axios.delete(`${apiEndpoint}/${id}`)

export const logout = async (id) => await axios.get(`${authEndpoint}/logout/${id}`)

export const signin = async (signData) => await axios.post(`${authEndpoint}/signin`,signData)

export const updatepost = async (id,updatePost) => await axios.put(`${apiEndpoint}/${id}`,updatePost)

export const addContact = async (contactModel) => await axios.post(`${contactEndpoint}`,contactModel)
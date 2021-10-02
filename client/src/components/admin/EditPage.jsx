import React from 'react'
import EditPost from './EditPost'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPost } from '../../api'



const EditPage = () => {
    const {id} = useParams()
    

    
    return (
        <div>
        <input value/>
        </div>
    )
}

export default EditPage

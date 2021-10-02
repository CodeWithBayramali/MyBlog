import React,{useEffect,useState} from "react";
import { Divider } from "antd";
import Post from "./Post";
import {useDispatch,useSelector} from 'react-redux'
import {fetchPosts} from '../../actions/post'
import {Spin,Pagination} from 'antd'
import lodash from 'lodash'

const BlogList = ()=> {

  const dispatch = useDispatch()
  const posties = useSelector((state)=> state.posts)
  
  useEffect(()=> {
    if(!posties[0]){
      dispatch(fetchPosts())
    }
  },[dispatch])


    return (
      <>
      {
        !posties.length ? <div className="d-flex justify-content-center"><Spin size="large" tip="Loading Posts..."></Spin></div>:
        posties.map((post)=> (
          <Post post={post}/>
        ))
      },
      
      </>
    );
  }

  export default BlogList
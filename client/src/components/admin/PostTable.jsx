import React,{useEffect} from "react";
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../../actions/post";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import lodash from 'lodash'
import {Link} from 'react-router-dom'

const PostTable = () => {

  const dispatch = useDispatch()
  const posties = useSelector((state)=> state.posts)

  useEffect(()=> {
    dispatch(fetchPosts())
  },[dispatch])

  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
            <tr>
              <th>Image</th>
              <th>Category Id</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            posties.map((post,index) => (
              <tr key={index}>
                <td><img src={post.image} width="80"/></td>
                <td>{post.categoryId}</td>
                <td>{post.title}</td>
                <td className="d-flex flex-row">
                 <Link to={`/admin/editpost/${post._id}`}><EditOutlined style={{fontSize:'18px',color:'blueviolet'}}/></Link> 
                <DeleteOutlined style={{fontSize:'18px',color:'red',marginLeft:'35px'}} onClick={()=> dispatch(deletePost(post._id))}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default PostTable;

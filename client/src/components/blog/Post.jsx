import React,{useState,useEffect} from 'react'
import { Card } from "antd";
import {Link} from 'react-router-dom'
import { Badge } from "antd";
import moment from 'moment'

const { Meta } = Card;

const Post = ({post}) => {

    
  const [user,setUser] = useState()

    useEffect(() => {
      if (localStorage.getItem("user") && !user) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }
    }, [user,post])

    return (
        <>
        <Badge.Ribbon text={moment(post.createdAt).add(2,"hours").fromNow()} style={{fontSize:'0.6rem'}}>
        <Card
          style={{cursor:'default'}}
          className="mb-5"
          hoverable
          cover={
            !post.image? <img className="d-none"/>:
            <img
            className="pos-main-img"
              alt="example"
              src={`${post.image}`}
            />
          }
          style={{ width: "auto" }}
              actions={[
                <Link to={`/details/${post._id}`} className="font-weight-bold">Learn More...</Link>,
          ]}
        >
          <Meta 
          className="mt-2"
            title={post.title}
            description={post.subtitle}
          />
        </Card>
        </Badge.Ribbon>
        </>
    )
}

export default Post

import React,{ useState } from 'react'
import { Layout, Breadcrumb,Button } from 'antd';
import PostModal from './PostModal';
import PostTable from './PostTable'

const { Content } = Layout;

const Post = () => {
  
  const [open , setOpen] = useState(false);

  const handleOpen = ()=> {
    setOpen(true);
  }
  const handleClose = ()=> {
    setOpen(false);
  }

    return (
      <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Button type="primary" onClick={handleOpen}>New Post</Button></Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background"
        style={{
          padding: 5,
          margin: 0,
          height:700,
        }}>
            <PostTable />
        

      </Content>
      <PostModal open={open} handleClose={handleClose}/>
      </Layout>
    )
}

export default Post

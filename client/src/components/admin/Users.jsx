import React from 'react'
import { Layout } from 'antd';
import Adminslider from './Adminslider'


const users = () => {
    return (
      <Layout>
      <Adminslider />
      <Layout style={{ padding: "0 24px 24px" }}>
        Users
      </Layout>
    </Layout>
    )
}

export default users

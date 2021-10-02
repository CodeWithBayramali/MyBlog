import React from 'react'
import {Dropdown,Menu,Button} from 'antd'

const categorMediaPage = () => {

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          </Menu.Item>
        </Menu>
      );

    return (
        <Dropdown overlay={menu} block placement="bottomCenter" arrow>
        <Button>bottomCenter</Button>
      </Dropdown>
    )
}

export default categorMediaPage

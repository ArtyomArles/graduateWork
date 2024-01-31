import {UserOutlined, VideoCameraOutlined, UploadOutlined,} from '@ant-design/icons'
import {Layout, Menu} from 'antd'
import React, {useState} from 'react'

const {Sider} = Layout

export function MainMenu() {

  const [collapsed, setCollapsed] = useState(false)

  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Личный кабинет',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Отчеты',
    },
  ]

  return (
    <Layout>
      <Sider
        collapsible
        theme='light'
        collapsed={collapsed}
        onCollapse={() => setCollapsed((collapsed) => !collapsed)}
      >
        <Menu items={items} />
      </Sider>
    </Layout>
  )
}

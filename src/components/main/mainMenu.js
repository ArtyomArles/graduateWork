import React from 'react'
import {Link} from 'react-router-dom'
import {UserOutlined, DollarOutlined, BarChartOutlined} from '@ant-design/icons'
import {Menu, Layout} from 'antd'

const {Header} = Layout

export function MainMenu() {

  const items = [
    {
      key: '1',
      icon:<Link to='account'><UserOutlined /></Link >,
      label: 'Личный кабинет',
    },
    {
      key: '2',
      icon: <Link to='budget'><DollarOutlined /></Link>,
      label: 'Бюджет',
    },
    {
      key: '3',
      icon: <Link to='monitoring'><BarChartOutlined /></Link>,
      label: 'Мониторинг',
    }
  ]

  return (
    <Header>
      <Menu
        items={items} 
        theme='dark'
        mode='horizontal'
        style={{justifyContent:'center'}}
      />
    </Header>
  )
}

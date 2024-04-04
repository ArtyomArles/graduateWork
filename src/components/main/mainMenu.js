import React from 'react'
import {Link} from 'react-router-dom'
import {UserOutlined, DollarOutlined, BarChartOutlined, ContainerOutlined} from '@ant-design/icons'
import {Menu, Layout} from 'antd'

const {Header} = Layout

export function MainMenu() {

  const items = [
    {
      key: 'content',
      icon:<Link to=' '><ContainerOutlined /></Link >,
      label: 'Контент',
    },
    {
      key: 'account',
      icon:<Link to='account'><UserOutlined /></Link >,
      label: 'Личный кабинет',
    },
    {
      key: 'budget',
      icon: <Link to='budget'><DollarOutlined /></Link>,
      label: 'Бюджет',
    },
    {
      key: 'monitoring',
      icon: <Link to='monitoring'><BarChartOutlined /></Link>,
      label: 'Мониторинг',
    }
  ]

  return (
    <Header style={{position: 'sticky'}}>
      <Menu
        items={items} 
        theme='dark'
        mode='horizontal'
        style={{justifyContent:'center'}}
      />
    </Header>
  )
}

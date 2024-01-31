import React from 'react'
import {MainContent, MainMenu} from './components'
import {Space} from 'antd'

export default function App() {

  return (
    <Space align='start'>
      <MainMenu />
      <MainContent />
    </Space>
  )
}
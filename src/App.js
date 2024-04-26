import React from 'react'
import {MainContent, MainMenu, MainFooter} from './components'
import {Layout, Space} from 'antd'

export default function App() {

  return (
    <Layout style={{minHeight: '100vh', backgroundColor: '#D0D0D0'}}>
      <MainMenu />
      <MainContent />
      <Space style={{display: 'flex', justifyContent: 'center'}}>
        <MainFooter />
      </Space>
    </Layout>
  )
}
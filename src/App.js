import React from 'react'
import {MainContent, MainMenu, MainFooter} from './components'
import {Layout} from 'antd'

export default function App() {

  return (
    <Layout style={{minHeight: '100vh'}}>
      <MainMenu />
      <MainContent />
      <MainFooter />
    </Layout>
  )
}
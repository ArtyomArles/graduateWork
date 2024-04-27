import React from 'react'
import {MainContent, MainMenu, MainFooter} from './components'
import {Layout, Space} from 'antd'
import {useSelector} from 'react-redux'
import AuthComponent from './components/main/authComponent'

export default function App() {

  const auth = useSelector((state) => state.auth)
  
  return (
    <Layout style={{minHeight: '99.9vh', backgroundColor: '#D0D0D0'}}>
      {auth ?
        <>
          <MainMenu />
          <MainContent />
          <Space style={{display: 'flex', justifyContent: 'center'}}>
            <MainFooter />
          </Space>
        </> 
        : <AuthComponent />}
    </Layout>
  )
}
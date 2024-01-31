import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Layout} from 'antd'

const {Content} = Layout

export function MainContent() {

  return (
    <Layout>
      <Content>
        <Routes>
          <Route
            path=''
            element={<div>CONTENT</div>}>
          </Route>
        </Routes>
      </Content>
    </Layout>
  )
}

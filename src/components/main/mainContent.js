import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Layout, theme} from 'antd'

const {Content} = Layout

export function MainContent() {

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken()

  return (
    <Content
      style={{
        padding: 12,
        margin: 12,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Routes>
        <Route
          path=''
          element={<div>CONTENT</div>}>
        </Route>
        <Route
          path='/account'
          element={<div>account</div>}>
        </Route>
        <Route
          path='/budget'
          element={<div>budget</div>}>
        </Route>
        <Route
          path='/monitoring'
          element={<div>monitoring</div>}>
        </Route>
      </Routes>
    </Content>
  )
}

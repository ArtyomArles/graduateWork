import React from 'react'
import {Layout} from 'antd'

const {Footer} = Layout

export function MainFooter() {

  return (
    <Footer style={{textAlign: 'center', padding: '0 0 10px'}}>
        Budget Planing ©{new Date().getFullYear()} Created by Artyom Lanin
    </Footer>
  )
}

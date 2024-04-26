import React from 'react'
import {Layout, Typography} from 'antd'

const {Footer} = Layout

export function MainFooter() {

  return (
    <Typography.Link href='https://vk.com/arlesss' target='_blank'>
      <Footer className='shadow-text'>
        Budget Planing ©{new Date().getFullYear()} Created by Artyom Lanin
      </Footer>
    </Typography.Link>
  )
}

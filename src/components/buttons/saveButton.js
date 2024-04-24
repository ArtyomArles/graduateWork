import {Button} from 'antd'
import React from 'react'
import {SaveOutlined} from '@ant-design/icons'

export default function SaveButton ({type = 'primary', title = 'Сохранить', ...props}) {
  return (
    <Button
      type={type}
      icon={<SaveOutlined />}
      {...props}
    >
      {title}
    </Button>
  )
}
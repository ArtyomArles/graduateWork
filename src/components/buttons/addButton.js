import {Button} from 'antd'
import React from 'react'
import {PlusOutlined} from '@ant-design/icons'

export default function AddButton ({type = 'primary', title = 'Добавить', ...props}) {
  return (
    <Button
      type={type}
      icon={<PlusOutlined />}
      {...props}
    >
      {title}
    </Button>
  )
}
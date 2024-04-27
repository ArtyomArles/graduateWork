import {Button} from 'antd'
import React from 'react'
import {CloseOutlined} from '@ant-design/icons'

export default function CloseButton ({title = 'Закрыть', ...props}) {
  return (
    <Button
      icon={<CloseOutlined />}
      {...props}
    >
      {title}
    </Button>
  )
}
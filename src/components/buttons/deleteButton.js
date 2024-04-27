import {Button, Popconfirm} from 'antd'
import React from 'react'
import {DeleteOutlined} from '@ant-design/icons'

export default function DeleteButton ({onClick, type = 'primary', title = 'Удалить', ...props}) {
  return (
    <Popconfirm
      okText='Да'
      cancelText='Отмена'
      onConfirm={onClick}
      title='Вы действительно хотите удалить запись?'
    >
      <Button
        type={type}
        icon={<DeleteOutlined />}
        ghost
        danger
        {...props}
      >
        {title}
      </Button>
    </Popconfirm>
  )
}
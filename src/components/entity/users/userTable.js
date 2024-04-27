import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'

export default function UserTable({data, setModalForm, ...props}) {

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Имя',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (firstName, record) => <Typography.Link onClick={() => {
        setModalForm(record)
      }}>{firstName}</Typography.Link>
    },
    {
      title: 'Фамилия',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Почта',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Роли',
      dataIndex: 'roles',
      key: 'roles',
      render: (roles) => roles.map(role => role.name).join(', ')
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status'
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={getDataWithKeys(data)}
      {...props}
    />
  )
}
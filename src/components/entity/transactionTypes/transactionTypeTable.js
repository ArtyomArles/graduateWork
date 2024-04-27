import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'

export default function TransactionTypeTable({data, setModalForm, ...props}) {

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (title, record) => <Typography.Link onClick={() => {
        setModalForm(record)
      }}>{title}</Typography.Link>
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
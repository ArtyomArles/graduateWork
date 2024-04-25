import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'

export default function BudgetCategoryTable({data, setModalForm, ...props}) {

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => <Typography.Link onClick={() => {
        setModalForm(record)
      }}>{id}</Typography.Link>
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description'
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
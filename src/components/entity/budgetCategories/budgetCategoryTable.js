import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'

export default function BudgetCategoryTable({data, setModalForm, ...props}) {

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
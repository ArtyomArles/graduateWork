import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'
import {getDateWithFormat} from 'src/helpers/getDateWithFormat'

export default function TransactionTable({data, setModalForm, ...props}) {

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
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      render: (category) => category.title
    },
    {
      title: 'Тип транзакции',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: (transactionType) => transactionType.title
    },
    {
      title: 'Сумма транзакции',
      dataIndex: 'sum',
      key: 'sum'
    },
    {
      title: 'Дата транзакции',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: (transactionDate) => getDateWithFormat(transactionDate)
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
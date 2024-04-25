import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'
import {getDateWithFormat} from 'src/helpers/getDateWithFormat'
import {BudgetCategory} from 'src/models/budgetCategory'
import {TransactionType} from 'src/models/transactionType'

export default function TransactionTable({data, setModalForm, setAddedModalForm, setAddedModel, ...props}) {

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
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
      render: (category, record) => <Typography.Link onClick={() => {
        setAddedModel({model: BudgetCategory})
        setAddedModalForm(record.category)
      }}>{category.title}</Typography.Link>
    },
    {
      title: 'Тип транзакции',
      dataIndex: 'transactionType',
      key: 'transactionType',
      render: (transactionType, record) => <Typography.Link onClick={() => {
        setAddedModel({model: TransactionType})
        setAddedModalForm(record.transactionType)
      }}>{transactionType.title}</Typography.Link>
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
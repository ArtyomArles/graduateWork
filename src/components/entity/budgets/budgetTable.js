import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'
import {getFormattedNumberValue} from 'src/helpers/getFormattedNumberValue'

export default function BudgetTable({data, setModalForm, ...props}) {

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Год бюджета',
      dataIndex: 'year',
      key: 'year',
      render: (year, record) => <Typography.Link onClick={() => {
        setModalForm(record)
      }}>{year}</Typography.Link>
    },
    {
      title: 'Сумма бюджета',
      dataIndex: 'sum',
      key: 'sum',
      render: (sum) => getFormattedNumberValue(sum)
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance) => getFormattedNumberValue(balance)
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
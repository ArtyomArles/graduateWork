import React, {useEffect, useState} from 'react'
import {Typography, Table} from 'antd'
import {TransactionType} from 'src/models/transactionType'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'

const {Title} = Typography

export default function TransactionTypeIndex() {

  const [data, setData] = useState([])
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      // render: (title, record) => <Link to={`${record.id}`}>{title}</Link> //TODO реализовать через модалку и Typography.Link
    }
  ]

  useEffect(() => {
    async function fetchData() {
      const result = await TransactionType.search()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <Title level={2}>
        {TransactionType.caption}
      </Title>
      <Table
        columns={columns}
        dataSource={getDataWithKeys(data)}
      />
    </>
  )
}
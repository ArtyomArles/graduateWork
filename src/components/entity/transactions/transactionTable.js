import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'
import {getDateWithFormat} from 'src/helpers/getDateWithFormat'
import {BudgetCategory} from 'src/models/budgetCategory'
import {TransactionType} from 'src/models/transactionType'
import {ICONS, ICON_NOT_FOUND} from 'src/components/common/icons'
import {Currency} from 'src/models/currency'
import {getFormattedNumberValue} from 'src/helpers/getFormattedNumberValue'
import {Transaction} from 'src/models/transaction'

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
        if (setModalForm)
          setModalForm(record)
        else {
          setAddedModel({model: Transaction})
          setAddedModalForm(record)
        }
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
      key: 'sum',
      render: (sum) => getFormattedNumberValue(sum)
    },
    {
      title: 'Иконка валюты',
      dataIndex: 'currency',
      key: 'currencyIcon',
      align: 'right',
      render: (currency) => {
        const returnedIcon = ICONS.find(_icon => _icon.name === currency.icon)
        return returnedIcon ? <returnedIcon.icon /> : <ICON_NOT_FOUND />
      }
    },
    {
      title: 'Валюта транзакции',
      dataIndex: 'currency',
      key: 'currency',
      render: (currency, record) => <Typography.Link onClick={() => {
        setAddedModel({model: Currency})
        setAddedModalForm(record.currency)
      }}>{currency.title}</Typography.Link>
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
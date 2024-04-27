import React, {useState} from 'react'
import {Form, Row, Divider, Space} from 'antd'
import Typography from 'antd/es/typography/Typography'
import {Doughnut} from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js/auto'
import BudgetsDropdown from '../dropdowns/budgetsDropdown'

export default function MonitoringForm() {

  const [budget, setBudget] = useState(null)
  Chart.register(...registerables)

  const empty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const sumByCategory = () => {
    const categories = {}
    
    budget?.transactions.forEach(transaction => {
      const categoryId = transaction.categoryId
      const categoryTitle = transaction.category.title
      const transactionSum = transaction.sum * transaction.currency.currencyRate

      if (categories[categoryId]) {
        categories[categoryId].sum += transactionSum
      } else {
        categories[categoryId] = {title: categoryTitle, sum: transactionSum}
      }
    })

    return Object.values(categories).map(category => ({title: category.title, sum: category.sum}))
  }

  const sumByTransactionType = () => {
    const transactionTypes = {}
    
    budget?.transactions.forEach(transaction => {
      const transactionTypeId = transaction.transactionTypeId
      const transactionTypeTitle = transaction.transactionType.title
      const transactionSum = transaction.sum * transaction.currency.currencyRate

      if (transactionTypes[transactionTypeId]) {
        transactionTypes[transactionTypeId].sum += transactionSum
      } else {
        transactionTypes[transactionTypeId] = {title: transactionTypeTitle, sum: transactionSum}
      }
    })

    return Object.values(transactionTypes).map(transactionType => ({title: transactionType.title, sum: transactionType.sum}))
  }

  const sumByCurrency = () => {
    const currencies = {}
    
    budget?.transactions.forEach(transaction => {
      const currencyId = transaction.currencyId
      const currencyTitle = transaction.currency.title
      const currencySum = transaction.sum * transaction.currency.currencyRate

      if (currencies[currencyId]) {
        currencies[currencyId].sum += currencySum
      } else {
        currencies[currencyId] = {title: currencyTitle, sum: currencySum}
      }
    })

    return Object.values(currencies).map(currency => ({title: currency.title, sum: currency.sum}))
  }

  const categories = sumByCategory()
  const transactionTypes = sumByTransactionType()
  const currencies = sumByCurrency()
  const backgroundColor = [
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ]
  const borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ]

  const categoryData = {
    labels: categories?.map(category => category.title) || [],
    datasets: [
      {
        data: categories?.map(category => category.sum) || empty,
        backgroundColor,
        borderColor,
        borderWidth: 1
      },
    ],
  }

  const transactionTypeData = {
    labels: transactionTypes?.map(transactionType => transactionType.title) || [],
    datasets: [
      {
        data: transactionTypes?.map(transactionType => transactionType.sum) || empty,
        backgroundColor,
        borderColor,
        borderWidth: 1
      },
    ],
  }

  const currencyData = {
    labels: currencies?.map(currency => currency.title) || [],
    datasets: [
      {
        data: currencies?.map(currency => currency.sum) || empty,
        backgroundColor,
        borderColor,
        borderWidth: 1
      },
    ],
  }

  return (
    <Form layout='vertical'>
      <Typography.Title level={4}>
        Мониторинг
      </Typography.Title>
      <Divider />
      <Form.Item label='Бюджетный год'>
        <BudgetsDropdown
          style={{width: '15%'}}
          value={budget?.id}
          onChange={(value, record) => {
            setBudget(record)
          }}
        />
      </Form.Item>
      {budget && 
        <Space style={{width: '100%', justifyContent: 'space-between'}}>
          <Space.Compact
            direction='vertical'
            align='center'
          >
            <Typography.Title level={4}>
              По категориям расхода
            </Typography.Title>
            <Doughnut data={categoryData} />
          </Space.Compact>
          <Space.Compact
            direction='vertical'
            align='center'
          >
            <Typography.Title level={4}>
              По типам транзакций
            </Typography.Title>
            <Doughnut data={transactionTypeData} />
          </Space.Compact>
          <Space.Compact
            direction='vertical'
            align='center'
          >
            <Typography.Title level={4}>
              По валютам
            </Typography.Title>
            <Typography.Text type='secondary'>
              Значения указаны в пересчете на рубли
            </Typography.Text>
            <Doughnut data={currencyData} />
          </Space.Compact>
        </Space>}
      <Row gutter={16}>
      </Row>
    </Form>
  )
}
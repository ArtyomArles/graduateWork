import React, {useCallback, useEffect, useState} from 'react'
import {Form, Row, Col, Input} from 'antd'
import BudgetCategoriesTypesDropdown from '../../dropdowns/budgetCategoriesDropdown'
import TransactionTypesDropdown from '../../dropdowns/transactionTypesDropdown'
import InputNumberStyled from '../../common/inputNumberStyled'
import DatePickerStyled from '../../common/datePickerStyled'
import {getConvertedDate} from 'src/helpers/getConvertedDate'
import CurrenciesDropdown from 'src/components/dropdowns/currenciesDropdown'

export default function TransactionForm({modalForm, setModalForm, isEdit, data}) {

  const [helpText, setHelpText] = useState('')

  const sumByCategory = (transactions) => {
    const categories = {}
    
    transactions.forEach(transaction => {
      const categoryId = transaction.categoryId
      const categoryTitle = transaction.category.title
      const transactionSum = transaction.sum * transaction.currency.currencyRate

      if (categories[categoryId]) {
        categories[categoryId].sum += transactionSum
      } else {
        categories[categoryId] = {title: categoryTitle, sum: transactionSum, priority: transaction.category.priority}
      }
    })

    return Object.values(categories).map(category => ({title: category.title, sum: Math.abs(category.sum), priority: category.priority}))
  }

  const getCategoryForOptimization = useCallback((date) => {
    const year = date.year()
    const transactions = data.filter(transaction => transaction.year === year && transaction.sum < 0)
    const categoriesWithSum = sumByCategory(transactions)
    const commonSum = categoriesWithSum.reduce((acc, cur) => acc + cur.sum, 0)
    const cummonPriority = categoriesWithSum.reduce((acc, cur) => acc + cur.priority, 0)
    const answer = categoriesWithSum.filter(categoryWithSum => categoryWithSum.sum / commonSum > categoryWithSum.priority / cummonPriority)
    if (answer.length > 1) {
      setHelpText(`Рассмотрите возможность сокращения расходов по статьям ${answer.map(item => `«${item.title}»`)}, так как значение их расходов превышает их приоритет.`)
    } else if (answer.length === 1) {
      setHelpText(`Рассмотрите возможность сокращения расходов по статье ${answer.map(item => `«${item.title}»`)}, так как она имеет низкий приоритет и значительную долю расходов.`)
    } else {
      setHelpText('')
    }
  }, [data])

  useEffect(() => {
    if (!isEdit) {
      if (modalForm.transactionDate) {
        getCategoryForOptimization(modalForm.transactionDate)
      } else {
        setHelpText('')
      }
    }
  }, [getCategoryForOptimization, isEdit, modalForm.transactionDate])

  return (
    <Form layout='vertical'>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item 
            label='Название'
            required
          >
            <Input
              value={modalForm.title}
              placeholder='Введите название'
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, title: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Категория'
            required
          >
            <BudgetCategoriesTypesDropdown 
              value={modalForm.categoryId}
              onChange={(value, record) => {
                setModalForm(prevForm => ({...prevForm, 
                  categoryId: value,
                  category: record
                }))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Тип транзакции'
            required
          >
            <TransactionTypesDropdown 
              value={modalForm.transactionTypeId}
              onChange={(value, record) => {
                setModalForm(prevForm => ({...prevForm, 
                  transactionTypeId: value,
                  transactionType: record
                }))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Дата транзакции'
            required
          >
            <DatePickerStyled
              value={getConvertedDate(modalForm.transactionDate)}
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, transactionDate: value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Валюта транзакции'
            required
          >
            <CurrenciesDropdown
              value={modalForm.currencyId}
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, currencyId: value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Сумма транзакции'
            required
            help={!isEdit ? helpText : null}
          >
            <InputNumberStyled
              value={modalForm.sum}
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, sum: value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label='Описание'
          >
            <Input.TextArea
              value={modalForm.description}
              placeholder='Введите описание'
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, description: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
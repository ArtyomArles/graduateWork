import React from 'react'
import {Form, Row, Col, Input} from 'antd'
import BudgetCategoriesTypesDropdown from '../../dropdowns/budgetCategoriesDropdown'
import TransactionTypesDropdown from '../../dropdowns/transactionTypesDropdown'
import InputNumberStyled from '../../common/inputNumberStyled'
import DatePickerStyled from '../../common/datePickerStyled'
import {getConvertedDate} from 'src/helpers/getConvertedDate'
import CurrenciesDropdown from 'src/components/dropdowns/currenciesDropdown'

export default function TransactionForm({modalForm, setModalForm}) {

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
            label='Сумма транзакции'
            required
          >
            <InputNumberStyled
              value={modalForm.sum}
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, sum: value}))
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
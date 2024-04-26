import React, {useState} from 'react'
import {Form, Row, Col} from 'antd'
import InputNumberStyled from 'src/components/common/inputNumberStyled'
import DatePickerStyled from 'src/components/common/datePickerStyled'
import {getConvertedDate} from 'src/helpers/getConvertedDate'
import TransactionTable from '../transactions/transactionTable'
import DictionaryModal from 'src/components/common/dictionaryModal'

export default function BudgetForm({modalForm, setModalForm}) {

  const [addedModalForm, setAddedModalForm] = useState(null)
  const [addedModel, setAddedModel] = useState(null)

  return (
    <Form layout='vertical'>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item 
            label='Год бюджета'
            required
          >
            <DatePickerStyled
              picker='year'
              value={getConvertedDate(modalForm.year)}
              placeholder='Выберите год'
              onChange={(year, dateString) => {
                setModalForm(prevForm => ({...prevForm, year: Number(dateString)}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item 
            label='Сумма'
            required
          >
            <InputNumberStyled
              value={modalForm.sum}
              placeholder='Введите сумму бюджета'
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, sum: value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Баланс'>
            <InputNumberStyled
              disabled
              value={modalForm.balance}
              placeholder='Баланс'
            />
          </Form.Item>
        </Col>
      </Row>
      <TransactionTable 
        data={modalForm.transactions}
        setAddedModel={setAddedModel}
        setAddedModalForm={setAddedModalForm}
      />
      <DictionaryModal
        model={addedModel?.model}
        modalForm={addedModalForm}
        setModalForm={setAddedModalForm}
      />
    </Form>
  )
}
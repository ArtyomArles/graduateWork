import React, {useEffect, useState} from 'react'
import {Form, Row, Col} from 'antd'
import InputNumberStyled from 'src/components/common/inputNumberStyled'
import DatePickerStyled from 'src/components/common/datePickerStyled'
import {getConvertedDate} from 'src/helpers/getConvertedDate'
import TransactionTable from '../transactions/transactionTable'
import DictionaryModal from 'src/components/common/dictionaryModal'
import {getFormattedNumberValue} from 'src/helpers/getFormattedNumberValue'

export default function BudgetForm({modalForm, setModalForm, setNeedRefresh, data, isEdit}) {

  const [addedModalForm, setAddedModalForm] = useState(null)
  const [addedModel, setAddedModel] = useState(null)
  const [calculatedBudget, setCalculatedBudget] = useState(null)

  const calculateBudget = (data) => {
    const lastBudgetSum = data[0].sum
    const sums = data.map(budget => budget.sum).reverse()
    const gains = []
    for (let i = 1; i < sums.length; i++) {
      gains[i - 1] = Math.round((sums[i] - sums[i - 1]) / sums[i - 1] * 10000) / 10000
    }
    let averageGain = 0
    gains.map(gain => averageGain += gain)
    averageGain = averageGain / gains.length
    setCalculatedBudget(lastBudgetSum * (1 + averageGain))
  }

  useEffect(() => {
    calculateBudget(data)
  }, [data])

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
            help={!isEdit && modalForm.year ? `Предложенный алгоритмом бюджет - ${getFormattedNumberValue(calculatedBudget)}` : null}
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
        data={modalForm.transactions.sort((a, b) => b.id - a.id)}
        setAddedModel={setAddedModel}
        setAddedModalForm={setAddedModalForm}
      />
      <DictionaryModal
        model={addedModel?.model}
        modalForm={addedModalForm}
        setModalForm={setAddedModalForm}
        setNeedRefresh={setNeedRefresh}
      />
    </Form>
  )
}
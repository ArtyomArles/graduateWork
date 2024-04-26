import React from 'react'
import {Form, Row, Col, Input} from 'antd'

export default function BudgetCategoryForm({modalForm, setModalForm}) {

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
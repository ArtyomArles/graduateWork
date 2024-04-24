import React from 'react'
import {Form, Row, Col, Input} from 'antd'

export default function TransactionTypeForm({modalForm, setModalForm}) {

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item 
          label='Название'
          required
        >
          <Input
            width={200}
            value={modalForm.title}
            onChange={(e) => {
              setModalForm(prevForm => ({...prevForm, title: e.target.value}))
            }}
          />
        </Form.Item>
      </Col>
    </Row>
  )
}
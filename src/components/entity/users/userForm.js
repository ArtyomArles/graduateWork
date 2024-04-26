import React from 'react'
import {Form, Row, Col, Input} from 'antd'

export default function UserForm({modalForm}) {

  return (
    <Form layout='vertical'>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label='Имя'>
            <Input
              disabled
              value={modalForm.firstName}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Фамилия'>
            <Input
              disabled
              value={modalForm.lastName}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Почта'>
            <Input
              disabled
              value={modalForm.email}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Роли'>
            <Input
              disabled
              value={modalForm.roles.map(role => role.name).join(', ')}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
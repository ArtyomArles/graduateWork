import React from 'react'
import {Form, Row, Col, Input} from 'antd'
import RolesDropdown from 'src/components/dropdowns/rolesDropdown'

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
            <RolesDropdown 
              disabled
              initialValues={modalForm.roles}
              value={modalForm.roles.map(role => role.id)}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
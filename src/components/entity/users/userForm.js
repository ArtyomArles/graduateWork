import React from 'react'
import {Form, Row, Col, Input} from 'antd'
import RolesDropdown from 'src/components/dropdowns/rolesDropdown'

export default function UserForm({modalForm, setModalForm, isEdit}) {

  return (
    <Form layout='vertical'>
      <Row gutter={16}>
        {!isEdit ?
          <>
            <Col span={8}>
              <Form.Item label='Логин'>
                <Input
                  placeholder='Введите логин'
                  value={modalForm.login}
                  onChange={(e) => {
                    setModalForm(prevForm => ({...prevForm, login: e.target.value}))
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Пароль'>
                <Input.Password
                  placeholder='Введите пароль'
                  value={modalForm.password}
                  onChange={(e) => {
                    setModalForm(prevForm => ({...prevForm, password: e.target.value}))
                  }}
                />
              </Form.Item>
            </Col>
          </>
          : <></>}
        <Col span={8}>
          <Form.Item label='Имя'>
            <Input
              placeholder='Введите имя'
              value={modalForm.firstName}
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, firstName: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Фамилия'>
            <Input
              placeholder='Введите фамилию'
              value={modalForm.lastName}
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, lastName: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Почта'>
            <Input
              placeholder='Введите почту'
              value={modalForm.email}
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, email: e.target.value}))
              }}
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
import React, {useCallback, useState} from 'react'
import {Form, Row, Col, Input, Divider, Button, Space} from 'antd'
import RolesDropdown from 'src/components/dropdowns/rolesDropdown'
import {useDispatch, useSelector} from 'react-redux'
import Typography from 'antd/es/typography/Typography'
import {User} from 'src/models/user'
import {setAuthInfo} from 'src/store/authSlice'

export default function AccountForm() {
  const account = useSelector(state => state.auth)
  const [form, setForm] = useState(account)

  const dispatch = useDispatch()

  const auth = useCallback(async (values) => {
    const body = `username=${encodeURIComponent(values.username)}&password=${encodeURIComponent(values.password)}`
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
      body
    })
    if (response.ok) {
      const user = await User.search({login: values.username})
      dispatch(setAuthInfo(user[0]))
    }
  }, [dispatch])

  const saveUser = useCallback(async () => {
    const user = new User(form)
    const response = await user.edit()
    if (response) {
      void auth({username: form.login, password: form.password})
    }
  }, [auth, form])

  return (
    <Form layout='vertical'>
      <Typography.Title level={4}>
        Личный кабинет
      </Typography.Title>
      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label='Логин'>
            <Input
              value={form.login}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, login: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Пароль'>
            <Input.Password
              value={form.password}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, password: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Имя'>
            <Input
              value={form.firstName}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, firstName: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Фамилия'>
            <Input
              value={form.lastName}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, lastName: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Почта'>
            <Input
              value={form.email}
              onChange={(e) => {
                setForm(prevForm => ({...prevForm, email: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='Роли'>
            <RolesDropdown
              disabled
              initialValues={form.roles}
              value={form.roles.map(role => role.id)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Space.Compact>
        <Button
          type='primary'
          onClick={saveUser}
        >
        Сохранить изменения
        </Button>
        <Button
          danger
          onClick={() => {
            setForm(account)
          }}
        >
        Отменить изменения
        </Button>
      </Space.Compact>
    </Form>
  )
}
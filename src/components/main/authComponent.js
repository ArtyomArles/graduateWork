import {Button, Form, Input, Typography, message} from 'antd'
import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {User} from 'src/models/user'
import {setAuthInfo} from 'src/store/authSlice'

export default function AuthComponent() {

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

  const onFinish = (values) => {
    void auth(values)
  }
  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.map(errorField => 
      errorField.errors.map(error => 
        message.error(error)
      )
    )
  }

  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '50px'
      }}>
      <Form
        name="basic"
        style={{backgroundColor: 'white', borderRadius: '10px', width: '400px', padding: '0 50px'}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout='vertical'
        autoComplete="off"
      >
        <Typography.Title level={4}>
          Авторизация
        </Typography.Title>
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите логин!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{marginLeft: '83px'}}>
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
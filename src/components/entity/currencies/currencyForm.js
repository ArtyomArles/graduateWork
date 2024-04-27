import React from 'react'
import {Form, Row, Col, Input} from 'antd'
import InputNumberStyled from 'src/components/common/inputNumberStyled'
import IconPicker from 'src/components/common/iconPicker'

export default function CurrencyForm({modalForm, setModalForm}) {

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
            label='Курс валюты'
            required
          >
            <InputNumberStyled
              value={modalForm.currencyRate}
              placeholder='Введите курс валюты'
              onChange={(value) => {
                setModalForm(prevForm => ({...prevForm, currencyRate: value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item 
            label='Страна'
            required
          >
            <Input
              value={modalForm.country}
              placeholder='Введите страну'
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, country: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item 
            label='Код'
            required
          >
            <Input
              value={modalForm.code}
              placeholder='Введите код валюты'
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, code: e.target.value}))
              }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            required
            label='Иконка валюты'
          >
            <IconPicker
              icon={modalForm.icon}
              onChange={(e) => {
                setModalForm(prevForm => ({...prevForm, icon: e.target.value}))
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
import {InputNumber} from 'antd'
import React from 'react'

export default function InputNumberStyled (props) {
  
  return (
    <InputNumber
      style={{width: '100%'}}
      placeholder='Введите значение'
      {...props}
    />
  )
}
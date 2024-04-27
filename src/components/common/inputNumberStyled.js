import {InputNumber} from 'antd'
import React from 'react'
import {getFormattedNumberValue} from 'src/helpers/getFormattedNumberValue'

export default function InputNumberStyled (props) {
  
  return (
    <InputNumber
      style={{width: '100%'}}
      placeholder='Введите значение'
      formatter={getFormattedNumberValue}
      {...props}
    />
  )
}
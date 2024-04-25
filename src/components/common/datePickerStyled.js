import {DatePicker} from 'antd'
import React from 'react'

export default function DatePickerStyled (props) {
  
  return (
    <DatePicker
      format={!props.picker ? 'DD.MM.YYYY' : undefined}
      style={{width: '100%'}}
      placeholder='Выберите дату'
      {...props}
    />
  )
}
import {DatePicker} from 'antd'
import React from 'react'

export default function DatePickerStyled ({width = '100%', ...props}) {
  
  return (
    <DatePicker
      format={!props.picker ? 'DD.MM.YYYY' : undefined}
      style={{width}}
      placeholder='Выберите дату'
      onClear
      {...props}
    />
  )
}
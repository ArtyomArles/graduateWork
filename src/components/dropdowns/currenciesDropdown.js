import React from 'react'
import MetaDropdown from '../common/metaDropdown'
import {Currency} from 'src/models/currency'

export default function CurrenciesDropdown(props) {
  
  return (
    <MetaDropdown
      model={Currency}
      placeholder='Выберите валюту'
      {...props}
    />
  )
}
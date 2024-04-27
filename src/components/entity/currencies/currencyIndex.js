import React from 'react'
import DictionaryIndex from '../../common/dictionaryIndex'
import {Currency} from 'src/models/currency'
import CurrencyTable from './currencyTable'

export default function CurrencyIndex() {

  return (
    <DictionaryIndex 
      model={Currency} 
      table={CurrencyTable}
    />
  )
}
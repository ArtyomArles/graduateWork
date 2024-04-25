import React from 'react'
import MetaDropdown from '../common/metaDropdown'
import {TransactionType} from 'src/models/transactionType'

export default function TransactionTypesDropdown(props) {
  return (
    <MetaDropdown 
      model={TransactionType}
      placeholder='Выберите тип транзакции'
      {...props}
    />
  )
}
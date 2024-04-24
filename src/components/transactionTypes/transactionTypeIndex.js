import React from 'react'
import {TransactionType} from 'src/models/transactionType'
import DictionaryIndex from '../common/dictionaryIndex'
import TransactionTypeTable from './transactionTypeTable'
import TransactionTypeForm from './transactionTypeForm'

export default function TransactionTypeIndex() {

  return (
    <DictionaryIndex 
      model={TransactionType} 
      table={TransactionTypeTable}
      form={TransactionTypeForm}
    />
  )
}
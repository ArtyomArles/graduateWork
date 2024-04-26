import React from 'react'
import {TransactionType} from 'src/models/transactionType'
import DictionaryIndex from '../../common/dictionaryIndex'
import TransactionTypeTable from './transactionTypeTable'

export default function TransactionTypeIndex() {

  return (
    <DictionaryIndex 
      model={TransactionType} 
      table={TransactionTypeTable}
    />
  )
}
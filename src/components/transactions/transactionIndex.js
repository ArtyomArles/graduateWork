import React from 'react'
import DictionaryIndex from '../common/dictionaryIndex'
import {Transaction} from 'src/models/transaction'
import TransactionTable from './transactionTable'

export default function TransactionIndex() {

  return (
    <DictionaryIndex 
      model={Transaction} 
      table={TransactionTable}
    />
  )
}
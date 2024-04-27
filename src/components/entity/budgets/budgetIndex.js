import React from 'react'
import DictionaryIndex from '../../common/dictionaryIndex'
import {Budget} from 'src/models/budget'
import BudgetTable from './budgetTable'

export default function BudgetIndex() {

  return (
    <DictionaryIndex 
      model={Budget} 
      table={BudgetTable}
    />
  )
}
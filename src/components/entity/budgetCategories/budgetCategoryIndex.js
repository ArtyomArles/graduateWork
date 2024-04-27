import React from 'react'
import DictionaryIndex from '../../common/dictionaryIndex'
import {BudgetCategory} from 'src/models/budgetCategory'
import BudgetCategoryTable from './budgetCategoryTable'

export default function BudgetCategoryIndex() {

  return (
    <DictionaryIndex 
      model={BudgetCategory} 
      table={BudgetCategoryTable}
    />
  )
}
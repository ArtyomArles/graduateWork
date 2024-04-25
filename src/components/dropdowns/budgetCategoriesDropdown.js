import React from 'react'
import MetaDropdown from '../common/metaDropdown'
import {BudgetCategory} from 'src/models/budgetCategory'

export default function BudgetCategoriesTypesDropdown(props) {
  
  return (
    <MetaDropdown
      model={BudgetCategory}
      placeholder='Выберите категорию'
      {...props}
    />
  )
}
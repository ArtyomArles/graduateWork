import React from 'react'
import MetaDropdown from '../common/metaDropdown'
import {Budget} from 'src/models/budget'

export default function BudgetsDropdown(props) {
  
  return (
    <MetaDropdown
      model={Budget}
      placeholder='Выберите бюджет'
      labelField='year'
      {...props}
    />
  )
}
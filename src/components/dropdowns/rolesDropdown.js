import React from 'react'
import MetaDropdown from '../common/metaDropdown'
import {Role} from 'src/models/role'

export default function RolesDropdown(props) {
  return (
    <MetaDropdown 
      model={Role}
      placeholder='Выберите роли'
      mode='multiple'
      {...props}
    />
  )
}
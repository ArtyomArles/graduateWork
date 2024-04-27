import React from 'react'
import DictionaryIndex from '../../common/dictionaryIndex'
import UserTable from './userTable'
import {User} from 'src/models/user'

export default function UserIndex() {

  return (
    <DictionaryIndex
      model={User} 
      table={UserTable}
    />
  )
}
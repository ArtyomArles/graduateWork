import ApplicationModel from './applicationModel'
import {TeamOutlined} from '@ant-design/icons'
import UserIndex from 'src/components/entity/users/userIndex'
import UserForm from 'src/components/entity/users/userForm'


export class User extends ApplicationModel {
  route = 'users'
  icon = TeamOutlined
  caption = 'Пользователь'
  indexCaption = 'Пользователи'
  indexComponent = UserIndex
  formComponent = UserForm
  canCreate = false
  readOnly = true
  initialState = {
    id: null,
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    roles: [],
    status: ''
  }
}
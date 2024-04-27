import TransactionTypeIndex from 'src/components/entity/transactionTypes/transactionTypeIndex'
import ApplicationModel from './applicationModel'
import {FontSizeOutlined} from '@ant-design/icons'
import TransactionTypeForm from 'src/components/entity/transactionTypes/transactionTypeForm'


export class TransactionType extends ApplicationModel {
  route = 'transaction-types'
  icon = FontSizeOutlined
  caption = 'Тип транзакции'
  indexCaption = 'Типы транзакции'
  indexComponent = TransactionTypeIndex
  formComponent = TransactionTypeForm
  initialState = {
    id: null, 
    title: ''
  }
}
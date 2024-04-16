import TransactionTypeIndex from 'src/components/transactionTypes/transactionTypeIndex'
import ApplicationModel from './applicationModel'
import {FontSizeOutlined} from '@ant-design/icons'


export class TransactionType extends ApplicationModel {
  route = 'transaction-types'
  icon = FontSizeOutlined
  caption = 'Тип транзакции'
  indexCaption = 'Типы транзакции'
  indexComponent = TransactionTypeIndex
  formComponent = null
  entity = null
}
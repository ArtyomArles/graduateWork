import TransactionIndex from 'src/components/transactions/transactionIndex'
import ApplicationModel from './applicationModel'
import {MoneyCollectOutlined} from '@ant-design/icons'
import TransactionForm from 'src/components/transactions/transactionForm'


export class Transaction extends ApplicationModel {
  route = 'transactions'
  icon = MoneyCollectOutlined
  caption = 'Транзакция'
  indexCaption = 'Транзакции'
  indexComponent = TransactionIndex
  formComponent = TransactionForm
  initialState = {
    id: null, 
    title: '',
    categoryId: null,
    description: '',
    sum: null,
    transactionTypeId: null,
    transactionDate: null,
    year: null,
    transactionType: null,
    category: null
  }
}
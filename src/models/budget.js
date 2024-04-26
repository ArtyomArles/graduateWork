import ApplicationModel from './applicationModel'
import {DollarOutlined} from '@ant-design/icons'
import BudgetForm from 'src/components/entity/budgets/budgetForm'
import BudgetIndex from 'src/components/entity/budgets/budgetIndex'


export class Budget extends ApplicationModel {
  route = 'budgets'
  icon = DollarOutlined
  caption = 'Бюджет'
  indexCaption = 'Бюджеты'
  indexComponent = BudgetIndex
  formComponent = BudgetForm
  initialState = {
    id: null, 
    year: null,
    sum: null,
    balance: null,
    transactions: []
  }
}
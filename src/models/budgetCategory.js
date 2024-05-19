import BudgetCategoryIndex from 'src/components/entity/budgetCategories/budgetCategoryIndex'
import ApplicationModel from './applicationModel'
import {OrderedListOutlined} from '@ant-design/icons'
import BudgetCategoryForm from 'src/components/entity/budgetCategories/budgetCategoryForm'


export class BudgetCategory extends ApplicationModel {
  route = 'categories'
  icon = OrderedListOutlined
  caption = 'Категория бюджета'
  indexCaption = 'Категории бюджета'
  indexComponent = BudgetCategoryIndex
  formComponent = BudgetCategoryForm
  initialState = {
    id: null, 
    title: '',
    description: '',
    priority: null
  }
}
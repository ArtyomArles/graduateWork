import CurrencyForm from 'src/components/entity/currencies/currencyForm'
import ApplicationModel from './applicationModel'
import {EuroOutlined} from '@ant-design/icons'
import CurrencyIndex from 'src/components/entity/currencies/currencyIndex'


export class Currency extends ApplicationModel {
  route = 'currencies'
  icon = EuroOutlined
  caption = 'Валюта'
  indexCaption = 'Валюты'
  indexComponent = CurrencyIndex
  formComponent = CurrencyForm
  initialState = {
    id: null, 
    title: '',
    currencyRate: null,
    country: '',
    icon: '',
    description: '',
    code: ''
  }
}
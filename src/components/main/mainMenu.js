import React from 'react'
import {Link} from 'react-router-dom'
import {UserOutlined, DollarOutlined, BarChartOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons'
import {Menu, Layout} from 'antd'
import {TransactionType} from 'src/models/transactionType'
import {BudgetCategory} from 'src/models/budgetCategory'
import {Transaction} from 'src/models/transaction'
import {User} from 'src/models/user'
import {Currency} from 'src/models/currency'
import {Budget} from 'src/models/budget'
import {useDispatch} from 'react-redux'
import {logout} from 'src/store/authSlice'

const {Header} = Layout

export function MainMenu() {

  const dispatch = useDispatch()

  const items = [
    {
      key: 'account',
      icon:<Link to='account'><UserOutlined /></Link >,
      label: 'Личный кабинет',
    },
    {
      key: 'budget',
      icon: <DollarOutlined />,
      label: 'Бюджет',
      children: [
        {
          key: 'currencies',
          icon: <Link to='currencies'>{React.createElement(Currency.icon)}</Link>,
          label: Currency.indexCaption
        },
        {
          key: 'transactionTypes',
          icon: <Link to='transactionTypes'>{React.createElement(TransactionType.icon)}</Link>,
          label: TransactionType.indexCaption
        },
        {
          key: 'budgetCategories',
          icon: <Link to='budgetCategories'>{React.createElement(BudgetCategory.icon)}</Link>,
          label: BudgetCategory.indexCaption
        },
        {
          key: 'transactions',
          icon: <Link to='transactions'>{React.createElement(Transaction.icon)}</Link>,
          label: Transaction.indexCaption
        },
        {
          key: 'budgets',
          icon: <Link to='budgets'>{React.createElement(Budget.icon)}</Link>,
          label: Budget.indexCaption
        }
      ]
    },
    {
      key: 'monitoring',
      icon: <Link to='monitoring'><BarChartOutlined /></Link>,
      label: 'Мониторинг'
    },
    {
      key: 'users',
      icon: <Link to='users'>{React.createElement(User.icon)}</Link>,
      label: User.indexCaption
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Настройки',
      children: [
        {
          key: 'exit',
          icon: <LogoutOutlined />,
          label: 'Выйти',
          onClick: () => dispatch(logout())
        }
      ]
    },
  ]

  return (
    <Header style={{position: 'sticky'}}>
      <Menu
        items={items} 
        theme='dark'
        mode='horizontal'
        style={{justifyContent:'center'}}
      />
    </Header>
  )
}

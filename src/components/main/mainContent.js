import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Layout, theme} from 'antd'
import {TransactionType} from 'src/models/transactionType'
import {BudgetCategory} from 'src/models/budgetCategory'
import {Transaction} from 'src/models/transaction'
import {User} from 'src/models/user'
import {Currency} from 'src/models/currency'
import {Budget} from 'src/models/budget'
import AccountForm from '../common/accountForm'

const {Content} = Layout

export function MainContent() {

  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken()

  return (
    <Content
      style={{
        padding: 12,
        margin: 12,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Routes>
        <Route
          path=''
          element={<div></div>}>
        </Route>
        <Route
          path='/account'
          element={<AccountForm />}>
        </Route>
        <Route
          path='/currencies'
          element={React.createElement(Currency.indexComponent)}>
        </Route>
        <Route
          path='/transactionTypes'
          element={React.createElement(TransactionType.indexComponent)}>
        </Route>
        <Route
          path='/budgetCategories'
          element={React.createElement(BudgetCategory.indexComponent)}>
        </Route>
        <Route
          path='/transactions'
          element={React.createElement(Transaction.indexComponent)}>
        </Route>
        <Route
          path='/budgets'
          element={React.createElement(Budget.indexComponent)}>
        </Route>
        <Route
          path='/users'
          element={React.createElement(User.indexComponent)}>
        </Route>
        <Route
          path='/monitoring'
          element={<div>monitoring</div>}>
        </Route>
      </Routes>
    </Content>
  )
}

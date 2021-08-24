// in src/customRoutes.js
import * as React from 'react'
import { Route } from 'react-router-dom'
import ButtonView from '../views/Button'
import Dialog from '../views/Dialog'
import Typography from '../views/Typography'
import BaseInput from '../views/BaseInput'
import MarkdownInput from '../views/MarkdownInput'
import Icon from '../views/Icon'
import Picker from '../views/Picker'
import DateRagePickerInput from '../views/DateRagePickerInput'
import Form from '../views/Form'
import List from '../views/List'
import Datagrid from '../views/Datagrid'
import Filters from '../views/Filters'
import Login from '../views/Login'
import Register from '../views/Register'

export default [
  <Route key='button' exact path='/components/button' component={ButtonView} />,
  <Route key='dialog' exact path='/components/dialog' component={Dialog} />,
  <Route
    key='typography'
    exact
    path='/components/typography'
    component={Typography}
  />,
  <Route key='baseInput' exact path='/inputs/base' component={BaseInput} />,
  <Route
    key='markdownInput'
    exact
    path='/inputs/markdown'
    component={MarkdownInput}
  />,
  <Route key='icon' exact path='/components/icon' component={Icon} />,
  <Route key='picker' exact path='/inputs/picker' component={Picker} />,
  <Route
    key='daterage'
    exact
    path='/inputs/dateragepicker'
    component={DateRagePickerInput}
  />,
  <Route key='form' exact path='/form' component={Form} />,
  <Route key='list' exact path='/list' component={List} />,
  <Route key='datagrid' exact path='/datagrid' component={Datagrid} />,
  <Route key='filters' exact path='/filters' component={Filters} />,
  <Route key='login' exact path='/templatepages/login' component={Login} />,
  <Route
    key='register'
    exact
    path='/templatepages/register'
    component={Register}
  />
]

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
  />
]

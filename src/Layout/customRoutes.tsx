// in src/customRoutes.js
import * as React from 'react'
import { Route } from 'react-router-dom'
import ButtonView from '../views/Button'
import Dialog from '../views/Dialog'
import Typography from '../views/Typography'

export default [
  <Route key='button' exact path='/components/button' component={ButtonView} />,
  <Route key='dialog' exact path='/components/dialog' component={Dialog} />,
  <Route
    key='typography'
    exact
    path='/components/typography'
    component={Typography}
  />
]

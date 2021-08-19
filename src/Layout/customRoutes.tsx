// in src/customRoutes.js
import * as React from 'react'
import { Route } from 'react-router-dom'
import ButtonView from '../views/Button'
import Dialog from '../views/Dialog'

export default [
  <Route key='button' exact path='/components/button' component={ButtonView} />,
  <Route key='dialog' exact path='/components/dialog' component={Dialog} />
]

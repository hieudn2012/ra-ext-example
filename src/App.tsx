import * as React from 'react'
import UserIcon from '@material-ui/icons/Group'
import { Admin, Resource, useLogin, useNotify } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishMessages from './i18n/en'
import { UserList } from './resources/users/users'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import Layout from './Layout/MyLayout'
import { dataProvider } from './fakeData'
import posts from './resources/posts'
import { NotFoundPage, LoginPage } from 'ra-ext'
import dashboard from './resources/dashboard'
import customRoutes from './Layout/customRoutes'

const i18nProvider = polyglotI18nProvider(() => {
  return englishMessages
}, 'en')

const Login = (props: any) => {
  const login = useLogin()
  const notify = useNotify()
  const { redirectTo } = props

  const handleSubmit = () => {
    login({ username: 'admin', password: 'admin' }, redirectTo)
      .then(() => console.log('Login Success'))
      .catch((error) => {
        notify(
          typeof error === 'string'
            ? error
            : typeof error === 'undefined' || !error.message
            ? 'ra.auth.sign_in_error'
            : error.message,
          'warning',
          {
            _:
              typeof error === 'string'
                ? error
                : error && error.message
                ? error.message
                : undefined
          }
        )
      })
  }

  return <LoginPage onSubmit={handleSubmit} />
}

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    layout={Layout}
    loginPage={Login}
    catchAll={NotFoundPage}
    customRoutes={customRoutes}
  >
    <Resource name='posts' {...posts} />
    <Resource name='users' icon={UserIcon} list={UserList} />
    <Resource name='dashboard' {...dashboard} />
  </Admin>
)
export default App

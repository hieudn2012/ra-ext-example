import * as React from 'react'
import UserIcon from '@material-ui/icons/Group'
import { Admin, Resource } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishMessages from './i18n/en'
import { UserList } from './resources/users/users'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import Layout from './Layout/MyLayout'
import { dataProvider } from './fakeData'
import posts from './resources/posts'
import { NotFoundPage } from 'ra-ext'
import dashboard from './resources/dashboard'
import customRoutes from './Layout/customRoutes'

const i18nProvider = polyglotI18nProvider(() => {
  return englishMessages
}, 'en')

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    layout={Layout}
    catchAll={NotFoundPage}
    customRoutes={customRoutes}
  >
    <Resource name='posts' {...posts} />
    <Resource name='users' icon={UserIcon} list={UserList} />
    <Resource name='dashboard' {...dashboard} />
  </Admin>
)
export default App

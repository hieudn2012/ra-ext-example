import * as React from 'react'
import { DataGridConfig, FiltersConfig } from 'ra-ext'
import { List } from 'react-admin'

const listConfig = {
  configs: {
    widget: 'datagrid',
    rowClick: 'edit',
    hasBulkActions: true,
    size: 'medium'
  },
  columns: {
    id: {
      ui: { widget: 'text' },
      label: 'Id'
    },
    fullName: {
      ui: { widget: 'text' },
      label: 'Name'
    },
    userName: {
      ui: { widget: 'text' },
      label: 'Username'
    },
    email: {
      ui: { widget: 'email' },
      label: 'Email'
    }
  }
}

const filterConfig = {
  name: {
    ui: { widget: 'search' },
    variant: 'outlined',
    alwaysOn: true
  },
  userName: {
    ui: { widget: 'text' },
    variant: 'outlined',
    alwaysOn: true
  },
  email: {
    ui: { widget: 'text' },
    variant: 'outlined',
    alwaysOn: true
  }
}

export const UserList: React.FC<any> = (props) => (
  <List {...props} filters={<FiltersConfig config={filterConfig} />}>
    <DataGridConfig config={listConfig} />
  </List>
)

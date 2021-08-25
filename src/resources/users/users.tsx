import * as React from 'react'
import { DataGridConfig, FiltersConfig, FilterWithTabsConfig } from 'ra-ext'
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
    },
    status: {
      ui: { widget: 'chip' },
      label: 'Status',
      size: 'small'
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

const filterWithTabsConfig = {
  configs: {
    source: 'status',
    variant: 'fullWidth'
  },
  tabs: [
    { id: 'PENDING', name: 'PENDING' },
    { id: 'ACTIVE', name: 'ACTIVE' },
    { id: 'DEACTIVE', name: 'DEACTIVE' }
  ]
}

export const UserList: React.FC<any> = (props) => {
  return (
    <List {...props} filters={<FiltersConfig config={filterConfig} />}>
      <React.Fragment>
        <FilterWithTabsConfig {...props} config={filterWithTabsConfig} />
        <DataGridConfig config={listConfig} />
      </React.Fragment>
    </List>
  )
}

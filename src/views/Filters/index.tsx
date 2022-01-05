import React from 'react'
import { MarkdownField } from 'ra-ext'

const mark = `### Source
\`\`\`tsx
import * as React from 'react'
import { List, ListProps } from 'react-admin'
import { DatagGidConfig, FiltersConfig } from 'ra-ext'

const dataGridConfig = {
  configs: {},
  columns: {
    id: {
      ui: { widget: 'text' },
      label: 'Id'
    },
    userId: {
      ui: { widget: 'text' },
      label: 'User',
    },
    title: {
      ui: { widget: 'text' },
      label: 'Title',
    }
  }
}

const filtersConfig = {
  title: {
    ui: { widget: 'search' },
    variant: 'outlined',
    label: 'Title',
    alwaysOn: true,
    iconPosition: 'start'
  },
  userId: {
    ui: { widget: 'component' },
    component: InputUserId
  },
  report: {
    ui: { widget: 'daterangepicker' },
    textFieldProps: {
      fullWidth: true,
      size: 'small',
      variant: 'outlined',
      margin: 'dense'
    }
  }
}

export const PostList = (props) => (
  <List {...props} filters={<FiltersConfig config={filtersConfig} />}>
    <DatagGidConfig config={dataGridConfig} />
  </List>
)
\`\`\`
`

export default function Filters() {
  return (
    <div>
      <MarkdownField source={mark} />
    </div>
  )
}

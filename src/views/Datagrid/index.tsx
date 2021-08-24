import React from 'react'
import { MarkdownField } from 'ra-ext'

const mark = `### Source
\`\`\`tsx
import * as React from 'react'
import { List, ListProps } from 'react-admin'
import { DatagridConfig } from 'ra-ext'

const config = {
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

export const PostList = (props: ListProps) => (
  <List {...props}>
    <DatagridConfig config={config} />
  </List>
)
\`\`\`
`

export default function Datagrid() {
  return (
    <div>
      <MarkdownField source={mark} />
    </div>
  )
}

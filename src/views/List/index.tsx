import React from 'react'
import { MarkdownField } from 'ra-ext'

const mark = `### Source
\`\`\`tsx
import * as React from 'react'
import { get } from 'lodash'
import {
  TextField,
  ReferenceField,
  ReferenceInput,
  SelectInput
} from 'react-admin'
import { ListConfig } from 'ra-ext'
import { Typography } from '@material-ui/core'

const FieldTitle = ({ record, source }: any) => (
  <Typography>{get(record, source)}</Typography>
)
const FieldUserId = ({ source }: any) => {
  return (
    <ReferenceField label='User' source={source} reference='users'>
      <TextField source='userName' />
    </ReferenceField>
  )
}

const InputUserId = ({ source }: any) => (
  <ReferenceInput label='User' source={source} reference='users'>
    <SelectInput
      optionText='userName'
      variant='outlined'
      helperText={false}
      error={false}
    />
  </ReferenceInput>
)

const listConfig = {
  title: 'Posts',
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
    userId: {
      ui: { widget: 'component' },
      label: 'User',
      component: FieldUserId
    },
    title: {
      ui: { widget: 'component' },
      label: 'Title',
      component: FieldTitle
    }
  },
  filters: {
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
  },
  filterWithTabs: {
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
}

export const PostList = (props: any) => (
  <ListConfig {...props} config={listConfig} />
)
\`\`\`
`

export default function List() {
  return (
    <div>
      <MarkdownField source={mark} />
    </div>
  )
}

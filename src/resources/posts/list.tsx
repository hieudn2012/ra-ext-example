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
      },
      isTranslate: false
    }
  }
}

export const PostList = (props: any) => (
  <ListConfig {...props} config={listConfig} />
)

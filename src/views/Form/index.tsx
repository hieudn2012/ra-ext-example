import React from 'react'
import { MarkdownField } from 'ra-ext'

const mark = `### Source
\`\`\`tsx
import React from 'react'
import { Create, required } from 'react-admin'
import { FormConfig } from 'ra-ext'
import { validate } from './validate'

const config = {
  configs: {
    validate: validate
  },
  generalInputProps: {
    spacing: 1,
    variant: 'outlined',
    margin: 'none',
    size: 'small',
    helperText: false,
    fullWidth: true,
    resource: 'posts'
  },
  inputs: {
    name: {
      ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 6 } }
    },
    body: {
      ui: { widget: 'text', type: 'base', grid: { sm: 6, md: 6 } }
    },
    timePicker: {
      ui: { widget: 'timepicker', type: 'base', grid: { sm: 6, md: 6 } }
    },
    container: {
      ui: { type: 'children', grid: { sm: 12, md: 12 } },
      children: {
        dateTimePicker: {
          ui: { widget: 'datetimepicker', type: 'base', grid: { sm: 6, md: 6 } }
        },
        datePicker: {
          ui: { widget: 'datepicker', type: 'base', grid: { sm: 6, md: 6 } },
          validate: [required()],
          minDate: '2019-01-01'
        },
        dateRangePicker: {
          ui: {
            widget: 'daterangepicker',
            type: 'base',
            grid: { sm: 12, md: 6 }
          },
          startDateProps: { disableFuture: true },
          endDateProps: { disableFuture: true },
          textFieldProps: {
            fullWidth: true,
            size: 'small',
            variant: 'outlined'
          },
          textFieldModalProps: {
            variant: 'outlined',
            size: 'small'
          },
          format: 'DD/MM/YYYY',
          duration: 2,
          validate: [required()],
          isClear: true
        }
      }
    }
  }
}

export const PostCreate = (props: any) => (
  <Create {...props}>
    <FormConfig config={config} />
  </Create>
)
\`\`\`
`

export default function Form() {
  return (
    <div>
      <MarkdownField source={mark} />
    </div>
  )
}

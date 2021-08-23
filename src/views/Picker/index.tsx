import React from 'react'
import { FormConfig, MarkdownField } from 'ra-ext'

const Toolbar = () => null

const mark = `### Source
\`\`\`tsx
import { DatePickerInput, DateTimePickerInput, TimePickerInput } from 'ra-ext'

<DatePickerInput source='datePickerInput' />
<DateTimePickerInput source='dateTimePickerInput'  />
<TimePickerInput source='timePickerInput'  />
\`\`\`

### Props
- Extends Material: [Picker](https://material-ui-pickers.dev/api/DatePicker)
- locale: \`en | vi\`
- pickerVariant: \`dialog | static\`
- format: string(dd/MM/yyyy)
`

const fullGrid = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12
}

const Docs = () => <MarkdownField source={mark} />

const config = {
  generalInputProps: {
    spacing: 1,
    variant: 'outlined',
    margin: 'dense'
  },
  inputs: {
    datePicker: {
      ui: { type: 'base', widget: 'datepicker', grid: fullGrid }
    },
    dateTimePicker: {
      ui: { type: 'base', widget: 'datetimepicker', grid: fullGrid }
    },
    timePicker: {
      ui: { type: 'base', widget: 'timepicker', grid: fullGrid }
    },
    markdown: {
      ui: { type: 'component', grid: fullGrid },
      component: Docs
    }
  },
  toolbar: Toolbar
}

export default function Picker() {
  return (
    <div>
      <FormConfig config={config} />
    </div>
  )
}

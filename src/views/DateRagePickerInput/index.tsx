import React from 'react'
import { DateRangePickerInput, MarkdownField } from 'ra-ext'
import { FormWithRedirect } from 'react-admin'
import { Box } from '@material-ui/core'

const mark = `### Source
\`\`\`tsx
import { DateRangePickerInput } from 'ra-ext'
\`\`\`

### Props
- startDateProps: extends [DatePickerProps](https://material-ui-pickers.dev/api/DatePicker)
- endDateProps: extends [DatePickerProps](https://material-ui-pickers.dev/api/DatePicker)
- textFieldProps: extends [TextFieldProps](https://material-ui.com/api/text-field/#textfield-api)
- options: \`TODAY | YESTERDAY | LAST_7_DAYS | LAST_14_DAYS | LAST_30_DAYS | THIS_WEEK | THIS_MONTH | LAST_MONTH | THREE_MONTHS_AGO | OPTIONAL\`
- optionData: Array<{
  \`id: string
  name: string
  startDate: date
  endDate: date
  isCustom?: boolean\`
}>
- isClear: \`boolean\`
- duration: \`number\`
- format: \`string(dd/MM/yyyy)\`
`

export default function DateRagePickerInput() {
  return (
    <div>
      <FormWithRedirect
        render={() => {
          return (
            <div>
              <DateRangePickerInput
                source='DateRangePickerInput'
                textFieldProps={{ variant: 'outlined' }}
              />
              <Box mt={5}>
                <MarkdownField source={mark} />
              </Box>
            </div>
          )
        }}
      />
    </div>
  )
}

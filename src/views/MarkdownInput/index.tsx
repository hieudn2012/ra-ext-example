import React from 'react'
import { MarkdownField, MarkdownInput as MarkdownInputUI } from 'ra-ext'
import { FormWithRedirect } from 'react-admin'
import { Box } from '@material-ui/core'

const mark = `### Source
\`\`\`tsx
import { MarkdownInput } from ra-ext

<MarkdownInput source='markdownInput'  resource='input' />
\`\`\`
`

export default function MarkdownInput() {
  return (
    <Box>
      <FormWithRedirect
        render={() => {
          return (
            <Box>
              <MarkdownInputUI source='MarkdownInput' />
              <MarkdownField source={mark} />
            </Box>
          )
        }}
      />
    </Box>
  )
}

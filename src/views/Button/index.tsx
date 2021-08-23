import React from 'react'
import { Button, MarkdownField } from 'ra-ext'
import { Box } from '@material-ui/core'

const mark = `### Source
\`\`\`tsx
import { Button } from 'ra-ext'

<Button
  startIcon='ErrorOutline'
  endIcon='ErrorOutline'
  variant='text'
  color='error'
  size='medium'
  loading
  mr={1}
  mt={1}
>
  Danger
</Button>
\`\`\`

### Props
- Extends Material: [\`Button\`](https://material-ui.com/api/button/#button-api)
- startIcon: string [\`Material Icon\`](https://material-ui.com/components/material-icons/#material-icons)
- endIcon: string [\`Material Icon\`](https://material-ui.com/components/material-icons/#material-icons)
- color: \`inherit | primary | secondary | default | error | warning | success | disable\`
- loading: boolean
- ml: 0 | 1 | 2 | 3 | 4 | 5
- mr: 0 | 1 | 2 | 3 | 4 | 5
- mt: 0 | 1 | 2 | 3 | 4 | 5
- mb: 0 | 1 | 2 | 3 | 4 | 5
`

export default function ButtonView() {
  return (
    <div>
      <Box mt={2}>
        <Button
          startIcon='ErrorOutline'
          endIcon='ErrorOutline'
          variant='text'
          color='error'
          size='medium'
          loading
          mr={1}
          mt={1}
        >
          Danger
        </Button>
        <Button
          startIcon='WarningRounded'
          endIcon='WarningRounded'
          variant='text'
          color='warning'
          size='medium'
          mr={1}
          mt={1}
        >
          Warning
        </Button>
        <Button
          startIcon='CheckCircleOutline'
          endIcon='CheckCircleOutline'
          variant='text'
          color='success'
          size='medium'
          mr={1}
          mt={1}
        >
          Success
        </Button>
        <Button
          startIcon='NotInterestedRounded'
          endIcon='NotInterestedRounded'
          variant='text'
          color='disable'
          size='medium'
          mr={1}
          mt={1}
        >
          Disable
        </Button>
        <Button
          startIcon='SaveOutlined'
          endIcon='SaveOutlined'
          variant='text'
          color='primary'
          size='medium'
          mr={1}
          mt={1}
        >
          Primary
        </Button>
        <Button
          startIcon='PowerSettingsNewOutlined'
          endIcon='PowerSettingsNewOutlined'
          variant='text'
          color='secondary'
          size='medium'
          mr={1}
          mt={1}
        >
          Secondary
        </Button>
        <Button
          startIcon='HomeOutlined'
          endIcon='HomeOutlined'
          variant='text'
          color='default'
          size='medium'
          mr={1}
          mt={1}
        >
          Default
        </Button>
      </Box>
      <Box mt={5}>
        <Button
          startIcon='ErrorOutline'
          variant='outlined'
          color='error'
          size='medium'
          mr={1}
          mt={1}
        >
          Danger
        </Button>
        <Button
          startIcon='WarningRounded'
          variant='outlined'
          color='warning'
          size='medium'
          mr={1}
          mt={1}
        >
          Warning
        </Button>
        <Button
          startIcon='CheckCircleOutline'
          variant='outlined'
          color='success'
          size='medium'
          mr={1}
          mt={1}
        >
          Success
        </Button>
        <Button
          startIcon='NotInterestedRounded'
          variant='outlined'
          color='disable'
          size='medium'
          mr={1}
          mt={1}
        >
          Disable
        </Button>
        <Button
          startIcon='SaveOutlined'
          variant='outlined'
          color='primary'
          size='medium'
          mr={1}
          mt={1}
        >
          Primary
        </Button>
        <Button
          startIcon='PowerSettingsNewOutlined'
          variant='outlined'
          color='secondary'
          size='medium'
          mr={1}
          mt={1}
        >
          Secondary
        </Button>
        <Button
          startIcon='HomeOutlined'
          variant='outlined'
          color='default'
          size='medium'
          mr={1}
          mt={1}
        >
          Default
        </Button>
      </Box>
      <Box mt={5}>
        <Button
          endIcon='ErrorOutline'
          variant='contained'
          color='error'
          size='medium'
          mr={1}
          mt={1}
        >
          Danger
        </Button>
        <Button
          endIcon='WarningRounded'
          variant='contained'
          color='warning'
          size='medium'
          mr={1}
          mt={1}
        >
          Warning
        </Button>
        <Button
          endIcon='CheckCircleOutline'
          variant='contained'
          color='success'
          size='medium'
          mr={1}
          mt={1}
        >
          Success
        </Button>
        <Button
          endIcon='NotInterestedRounded'
          variant='contained'
          color='disable'
          size='medium'
          mr={1}
          mt={1}
        >
          Disable
        </Button>
        <Button
          endIcon='SaveOutlined'
          variant='contained'
          color='primary'
          size='medium'
          mr={1}
          mt={1}
        >
          Primary
        </Button>
        <Button
          endIcon='PowerSettingsNewOutlined'
          variant='contained'
          color='secondary'
          size='medium'
          mr={1}
          mt={1}
        >
          Secondary
        </Button>
        <Button
          endIcon='HomeOutlined'
          variant='contained'
          color='default'
          size='medium'
          mr={1}
          mt={1}
        >
          Default
        </Button>
      </Box>
      <Box mt={5}>
        <MarkdownField source={mark} />
      </Box>
    </div>
  )
}

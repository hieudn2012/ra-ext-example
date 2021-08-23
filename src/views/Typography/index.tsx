import React from 'react'
import { MarkdownField, Typography as TypographyUI } from 'ra-ext'
import { Box } from '@material-ui/core'

const mark = `### Source
\`\`\`tsx
import { Typography } from 'ra-ext'

<Typography variant='h4' color='warning'>
  Color warning
</Typography>

<Typography variant='h4' color='warning' translateText='message.text.warning' />
\`\`\`

### Props
- Extends Material: [\`Typography\`](https://material-ui.com/api/typography/)
- color: \`disable | error | inherit | initial | primary | | secondary | success | | warning | textPrimary | textSecondary | undefined\`
- translateText: \`string\`
`

export default function Typography() {
  return (
    <div>
      <TypographyUI display='block' variant='button'>
        Variant Button
      </TypographyUI>
      <TypographyUI display='block' variant='h1'>
        Variant h1
      </TypographyUI>
      <TypographyUI display='block' variant='h2'>
        Variant h2
      </TypographyUI>
      <TypographyUI display='block' variant='h3'>
        Variant h3
      </TypographyUI>
      <TypographyUI display='block' variant='h4'>
        Variant h4
      </TypographyUI>
      <TypographyUI display='block' variant='h5'>
        Variant h5
      </TypographyUI>
      <TypographyUI display='block' variant='h6'>
        Variant h6
      </TypographyUI>
      <TypographyUI display='block' variant='inherit'>
        Variant inherit
      </TypographyUI>
      <TypographyUI display='block' variant='overline'>
        Variant overline
      </TypographyUI>
      <TypographyUI display='block' variant='srOnly'>
        Variant srOnly
      </TypographyUI>
      <TypographyUI display='block' variant='subtitle1'>
        Variant subtitle1
      </TypographyUI>
      <TypographyUI display='block' variant='subtitle2'>
        Variant subtitle2
      </TypographyUI>
      <TypographyUI display='block' variant='caption'>
        Variant caption
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='disable'>
        Color disable
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='error'>
        Color error
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='inherit'>
        Color inherit
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='initial'>
        Color initial
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='primary'>
        Color primary
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='secondary'>
        Color secondary
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='success'>
        Color success
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='textPrimary'>
        Color textPrimary
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='textSecondary'>
        Color textSecondary
      </TypographyUI>
      <TypographyUI display='block' variant='h4' color='warning'>
        Color warning
      </TypographyUI>
      <Box mt={5}>
        <MarkdownField source={mark} />
      </Box>
    </div>
  )
}

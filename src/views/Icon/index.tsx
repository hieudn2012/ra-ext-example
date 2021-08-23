import React from 'react'
import { Icon as IconUI, MarkdownField } from 'ra-ext'
import { Box } from '@material-ui/core'

const Icons = [
  { icon: 'AddShoppingCartOutlined', color: 'inherit' },
  { icon: 'AddToPhotosOutlined', color: 'primary' },
  { icon: 'AirplayOutlined', color: 'secondary' },
  { icon: 'ArchiveOutlined', color: 'disable' },
  { icon: 'BackupOutlined', color: 'warning' },
  { icon: 'CakeOutlined', color: 'success' }
]

const mark = `### Source
\`\`\`tsx
import { Icon } from 'ra-ext'

<Icon source='AddShoppingCartOutlined' />
\`\`\`

### Props
- Extends Material: [Icon](https://material-ui.com/api/icon/)
- source: \`string\` [Material Icons](https://material-ui.com/components/material-icons/)
- color: \`inherit | primary | secondary | default | error | warning | success | disable | disabled | action | undefined\`
`

export default function Icon() {
  return (
    <Box>
      {Icons.map((item: any) => (
        <Box mr={2} key={item.icon} display='inline'>
          <IconUI source={item.icon} color={item.color} />
        </Box>
      ))}
      <Box mt={5}>
        <MarkdownField source={mark} />
      </Box>
    </Box>
  )
}

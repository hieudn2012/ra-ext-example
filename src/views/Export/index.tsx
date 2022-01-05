import React from 'react'
import { MarkdownField, Button, exportToExcel } from 'ra-ext'

const mark = `### Source
\`\`\`tsx
const data = [
  { id: 1, name: 'Lorem 1', phone: '0909212331' },
  { id: 2, name: 'Lorem 1', phone: '0905212331' }
]

const rowConfig: any = (record: any) => ({
  name: {
    label: 'Name',
    value: record.name,
    style: 'text-align: left'
  },
  phone: {
    label: 'Phone',
    value: record.phone,
    style: 'text-align: right'
  }
})

export default function Export() {
  const handleExport = () => {
    exportToExcel(data, rowConfig, 'export_name')
  }
  return (
    <div>
      <Button onClick={handleExport}>Export</Button>
    </div>
  )
}
\`\`\`
`

const data = [
  { id: 1, name: 'Lorem 1', phone: '0909212331' },
  { id: 2, name: 'Lorem 1', phone: '0905212331' }
]

const rowConfig: any = (record: any) => ({
  name: {
    label: 'Name',
    value: record.name,
    style: 'text-align: left'
  },
  phone: {
    label: 'Phone',
    value: record.phone,
    style: 'text-align: right'
  }
})

export default function Export() {
  const handleExport = () => {
    exportToExcel(data, rowConfig, 'export_name')
  }
  return (
    <div>
      <Button onClick={handleExport}>Export</Button>
      <MarkdownField source={mark} />
    </div>
  )
}

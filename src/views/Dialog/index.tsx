import React from 'react'
import { Button, Dialog as DialogUI, DialogVariantProps } from 'ra-ext'
import { Typography } from '@material-ui/core'

export default function Dialog() {
  const [open, setOpen] = React.useState(false)
  const [variant, setVariant] = React.useState<DialogVariantProps>('default')

  const handleToggleButton = (type: number) => {
    setOpen(true)
    setVariant(type === 1 ? 'default' : 'layout')
  }

  return (
    <div>
      <Button
        onClick={() => handleToggleButton(1)}
        variant='contained'
        color='disable'
        startIcon='PowerSettingsNewOutlined'
        mr={1}
      >
        Open Dialog Default
      </Button>
      <Button
        onClick={() => handleToggleButton(2)}
        variant='contained'
        color='disable'
        startIcon='PowerSettingsNewOutlined'
      >
        Open Dialog Layout
      </Button>
      <DialogUI
        open={open}
        onClose={() => setOpen(false)}
        title={<Typography variant='button'>Dialog Catalina</Typography>}
        variant={variant}
        seperateHeader
        seperateAction
        isClose
        renderContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            veniam tempora? Numquam rem illo illum, soluta, tempora aliquam
            voluptas quo magni dolore porro expedita sed hic, ea labore
            accusantium fuga.
          </div>
        }
        renderAction={
          <div>
            <Button
              onClick={() => setOpen(false)}
              mr={1}
              variant='outlined'
              color='disable'
              startIcon='CancelOutlined'
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpen(false)}
              color='success'
              variant='outlined'
              startIcon='DoneAllOutlined'
            >
              Done
            </Button>
          </div>
        }
      />
    </div>
  )
}

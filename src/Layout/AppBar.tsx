import React from 'react'
import { Theme, makeStyles, Box } from '@material-ui/core'
import { AppBar as AppBarUI } from 'react-admin'
import { ThemeToggle } from 'ra-ext'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  }
}))

export default function AppBar(props: any) {
  const classes = useStyles()

  return (
    <AppBarUI {...props} className={classes.root}>
      <Box flexGrow={1} />
      <ThemeToggle />
    </AppBarUI>
  )
}

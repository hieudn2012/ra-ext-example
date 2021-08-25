import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  ThemeProvider,
  createTheme
} from '@material-ui/core/styles'
import { darkTheme, Icon, lightTheme, ThemeToggle } from 'ra-ext'
import Menu from './Menu'
import {
  Box,
  Divider,
  MenuItem,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded'
import {
  LoadingIndicator,
  ReduxState,
  setSidebarVisibility,
  UserMenu
} from 'react-admin'
import { useSelector, useDispatch } from 'react-redux'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      transition: 'all .2s',
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerHiden: {
      transition: 'all .2s',
      width: 0
    },
    appBar: {
      transition: 'all .2s',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      },
      '& .MuiToolbar-root': {
        minHeight: 50
      }
    },
    appBarHiden: {
      transition: 'all .2s',
      [theme.breakpoints.up('md')]: {
        width: '100%',
        marginLeft: 0
      },
      '& .MuiToolbar-root': {
        minHeight: 50
      }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolbar: {
      minHeight: 50
    },
    toolbarMenu: {
      minHeight: 50,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 16
    },
    drawerPaper: {
      transition: 'all .2s',
      [theme.breakpoints.up('md')]: {
        width: drawerWidth
      }
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    mr1: {
      marginRight: 16
    }
  })
)

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: any
}

const Layout = (props: Props) => {
  const { window, children } = props
  const theme = useTheme()

  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const open = useSelector<ReduxState>(
    (state) => state.admin.ui.sidebarOpen || false
  )

  const dispatch = useDispatch()

  const handleDrawerToggle = () => {
    dispatch(setSidebarVisibility(!open))
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={isMd && open ? classes.appBar : classes.appBarHiden}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} />
          <ThemeToggle />
          <LoadingIndicator />
          <UserMenu icon={<Icon source='AssignmentIndOutlined' />}>
            <MenuItem>
              <Icon source='PowerSettingsNewRounded' className={classes.mr1} />
              Logout
            </MenuItem>
            <MenuItem>
              <Icon source='SettingsOutlined' className={classes.mr1} />
              Setting
            </MenuItem>
          </UserMenu>
        </Toolbar>
      </AppBar>
      <nav
        className={isMd && open ? classes.drawer : classes.drawerHiden}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={!!(open && isSm)}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbar} />
            <Divider />
            <Menu />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: isMd && open ? classes.drawerPaper : classes.drawerHiden
            }}
            variant='permanent'
            open
          >
            <div className={classes.toolbarMenu}>
              <SupervisorAccountRoundedIcon style={{ marginRight: 16 }} />
              <Typography variant='button'>ADMIN PAGE</Typography>
            </div>
            <Divider />
            <Menu />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} id='contentmain'>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

const light = createTheme(lightTheme)
const dark = createTheme(darkTheme)

const MyLayout = ({ children }: any) => {
  const theme = localStorage.getItem('theme') || 'light'
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  )
}

export default MyLayout

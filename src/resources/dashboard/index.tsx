import {
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Paper
} from '@material-ui/core'
import React from 'react'
import { List, ListProps } from 'react-admin'

const useStyles = makeStyles(() => ({
  content: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}))

const Content = (props: any) => {
  const { data } = props
  const { userData = [], historyData = [] } = data['1'] || {}

  console.log(data)

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='subtitle2'>Total users</Typography>
              <Typography variant='button'>2340</Typography>
              <Box mt={1}>
                <Chip
                  size='small'
                  label='+1202'
                  color='primary'
                  variant='outlined'
                  style={{ marginRight: 4 }}
                />
                <Typography variant='subtitle2' display='inline'>
                  Last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='subtitle2'>Total users</Typography>
              <Typography variant='button'>2340</Typography>
              <Box mt={1}>
                <Chip
                  size='small'
                  label='+1202'
                  color='primary'
                  variant='outlined'
                  style={{ marginRight: 4 }}
                />
                <Typography variant='subtitle2' display='inline'>
                  Last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='subtitle2'>Total users</Typography>
              <Typography variant='button'>2340</Typography>
              <Box mt={1}>
                <Chip
                  size='small'
                  label='+1202'
                  color='primary'
                  variant='outlined'
                  style={{ marginRight: 4 }}
                />
                <Typography variant='subtitle2' display='inline'>
                  Last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='subtitle2'>Total users</Typography>
              <Typography variant='button'>2340</Typography>
              <Box mt={1}>
                <Chip
                  size='small'
                  label='+1202'
                  color='primary'
                  variant='outlined'
                  style={{ marginRight: 4 }}
                />
                <Typography variant='subtitle2' display='inline'>
                  Last month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={3} />

      {/* Table */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align='right'>Full name</TableCell>
                  <TableCell align='right'>Phone Number</TableCell>
                  <TableCell align='right'>Date Register</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((row: any, index: number) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {index}
                    </TableCell>
                    <TableCell align='right'>{row.name}</TableCell>
                    <TableCell align='right'>{row.phoneNumber}</TableCell>
                    <TableCell align='right'>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align='right'>Deposit</TableCell>
                  <TableCell align='right'>Bonus</TableCell>
                  <TableCell align='right'>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData.map((row: any, index: number) => (
                  <TableRow key={row.id}>
                    <TableCell component='th' scope='row'>
                      {index}
                    </TableCell>
                    <TableCell align='right'>{row.deposit}</TableCell>
                    <TableCell align='right'>{row.bonus}</TableCell>
                    <TableCell align='right'>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

const Dashboard = (props: ListProps) => {
  const classes = useStyles()
  return (
    <List
      {...props}
      actions={false}
      pagination={false}
      classes={{ content: classes.content }}
    >
      <Content />
    </List>
  )
}

export default {
  list: Dashboard
}

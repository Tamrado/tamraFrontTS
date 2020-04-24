import React from 'react'
import {
  Grid,
  Toolbar,
  AppBar,
  makeStyles
} from '@material-ui/core'
import { AppColor } from 'styles'

const useStyles = makeStyles({
  root: {
    background: AppColor.white,
    paddingRight: '10%',
    paddingLeft: '10%'
  },
  logo: {
    fontSize: 23,
    letterSpacing: 1,
    color: AppColor.blueGreen,
    cursor: 'pointer'
  }
})

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}
      position='sticky'
      elevation={0}
      color='inherit'
    >
      <Toolbar>
        <Grid container alignItems='center'>
          <div className={classes.logo} onClick={()=>window.location.href = '/'}>TAMRA</div>
        </Grid>
        <Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header

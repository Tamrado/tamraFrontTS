import React from 'react'
import { Button, makeStyles, Theme } from '@material-ui/core'
import { AppColor } from 'styles'
import oc from 'open-color'

const useStyles = makeStyles(( theme: Theme ) => ({
  button: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2.5),
    display: 'inline-block',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    borderRadius: theme.spacing(2.5),
    border: `1px solid ${AppColor.blueGreen}`,
    color: AppColor.black,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    transition: '.2s all',
    '& > hover': {
      color: oc.teal[5],
      boxShadow: AppColor.shadow0
    },
    '& > active': {
      color: oc.teal[7]
    }
  }
}))

interface BorderButtonProps {
  onClick: () => void
}

const BorderButton: React.FC<BorderButtonProps> = props => {
  const classes = useStyles()
  const { onClick, children } = props

  return (
    <Button className={classes.button} onClick={onClick}>
      {children}
    </Button>
  )
}

export default BorderButton

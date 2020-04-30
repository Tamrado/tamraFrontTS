import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Map } from 'immutable'
const useStyles = makeStyles((thumbnail) => ({
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    cursor: 'pointer',
    marginRight: 20,
    marginTop: 7,
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&: hover': {
      filter: 'brightness(105%)'
    }
  },
  menuLine: {
    height: 55,
    borderRight: '2px solid rgba(18, 184, 134, 0.1)',
    marginRight: 12
  }
}))

interface UserThumbnailProps {
  user: Map<string, string>
  username: string
}

const UserThumbnail: React.FC<UserThumbnailProps> =  props => {
  const { user, username } = props
  const thumbnail = user.getIn(['loggedInfo','thumbnail'])
  const classes = useStyles(thumbnail)

  return (
    <>
      <div className={classes.thumbnail}
           onClick={()=>window.location.href =`/@:${username}`}
      />
      <div className={classes.menuLine} />
    </>
  )
}

export default UserThumbnail

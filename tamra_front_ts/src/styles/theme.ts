import { createMuiTheme } from '@material-ui/core'
import { AppFontForTheme } from './fonts'

const AppTheme = createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: [
	  'Rajdhani',
	  'Noto Sans KR',
	  'Do Hyeon',
	  'Malgun Gothic',
	  'sans-serif'
    ],
    ...AppFontForTheme
  }
})

export default AppTheme

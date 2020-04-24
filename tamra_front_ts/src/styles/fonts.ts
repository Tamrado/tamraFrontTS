import { TypographyVariant, TypographyStyle } from '@material-ui/core'

export interface Font {
  name: TypographyVariant
  style: Partial<TypographyStyle>
}

const caption: Font = {
  name: 'caption',
  style: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    textTransform: 'none'
  }
}

const AppFont: { [name: string]: Font } = { caption }

export const AppFontForTheme = Object.assign(
  {},
  ...Object.keys(AppFont).map(key => ({
    [key]: AppFont[key].style
  }))
)

export default AppFont

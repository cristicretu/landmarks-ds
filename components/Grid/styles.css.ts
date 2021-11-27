import { style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars, breakpoints } from 'site/styles/theme.css'

export const grid = style({
  display: 'flex',
  flexWrap: 'wrap',
})

const widthScale = {
  fit: 'fit',
  '1': 8.33,
  '2': 16.66,
  '3': 25,
  '4': 33.32,
  '5': 41.65,
  '6': 50,
  '7': 58.31,
  '8': 66.64,
  '9': 75,
  '10': 88.3,
  '11': 91.63,
  '12': 100,
}

export const mobileSizeVariants = styleVariants(widthScale, (scale) => {
  if (scale === 'fit') {
    return { flex: 1 }
  }
  return { width: `${scale}%` }
})

export const tabletSizeVariants = styleVariants(widthScale, (scale) => ({
  '@media': {
    [breakpoints.x_tablet]: (scale === 'fit')
      ? { flex: 1 }
      : { width: `${scale}%`, flex: 'none' }
  }
}))

export const laptopSizeVariants = styleVariants(widthScale, (scale) => ({
  '@media': {
    [breakpoints.xx_laptop]: (scale === 'fit')
      ? { flex: 1 }
      : { width: `${scale}%`, flex: 'none' }
  }
}))

export const desktopSizeVariants = styleVariants(widthScale, (scale) => ({
  '@media': {
    [breakpoints.xxx_desktop]: (scale === 'fit')
      ? { flex: 1 }
      : { width: `${scale}%`, flex: 'none' }
  }
}))

export const gridGutter = styleVariants(vars.spacing, (gutter) => ({
  marginLeft: calc(gutter).negate().toString(),
  marginRight: calc(gutter).negate().toString(),
}))

export const colGutter = styleVariants(vars.spacing, (gutter) => ({
  paddingLeft: gutter,
  paddingRight: gutter,
  marginBottom: gutter,
}))
import { style, styleVariants } from '@vanilla-extract/css'
import { vars, breakpoints } from '../../../styles/theme.css'

export const grid = style({
  display: 'flex',
  flexWrap: 'wrap',

  // '@media': {
  //   [breakpoints.x_tablet]: {
  //     display: 'flex',
  //   },
  //   [breakpoints.xx_laptop]: {

  //   },
  //   [breakpoints.xxx_desktop]: {

  //   }
  // }
})

export const col = style({
  flex: 1,
  // tablets and up default to side by side columns
  '@media': {
    [breakpoints.x_tablet]: {
      flex: 1,
    }
  }
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
  return { flex: `0 0 ${scale}%` }
})

export const tabletSizeVariants = styleVariants(widthScale, (scale) => {
  if (scale === 'fit') {
    return { flex: 1 }
  }
  return {
    '@media': {
      [breakpoints.x_tablet]: {
        flex: `0 0 ${scale}%`
      }
    }
  }
})

export const laptopSizeVariants = styleVariants(widthScale, (scale) => {
  if (scale === 'fit') {
    return { flex: 1 }
  }
  return {
    '@media': {
      [breakpoints.xx_laptop]: {
        flex: `0 0 ${scale}%`
      }
    }
  }
})

export const desktopSizeVariants = styleVariants(widthScale, (scale) => {
  if (scale === 'fit') {
    return { flex: 1 }
  }
  return {
    '@media': {
      [breakpoints.xxx_desktop]: {
        flex: `0 0 ${scale}%`
      }
    }
  }
})
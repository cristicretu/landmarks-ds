import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { breakpoints, vars } from 'site/styles/theme.css'

export const enabled = style({
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in-out'
})

export const from = styleVariants({
  slideUp: {
    transform: 'translateY(50px)',
    opacity: 0
  }
})

export const to = styleVariants({
  slideUp: {
    transform: 'translateY(0px)',
    opacity: 1
  }
})

export const delay = styleVariants({
  '05': {
    transitionDelay: '0.5s'
  },
  '1': {
    transitionDelay: '1s'
  }
})

export const duration = styleVariants({
  '03': {
    transitionDuration: '0.3s'
  },
  '06': {
    transitionDuration: '0.6s'
  },
  '1': {
    transitionDuration: '1s'
  }
})

const animLineHeightDesktop = keyframes({
  '0%': { lineHeight: vars.lineHeight['2x'] },
  '100%': { lineHeight: vars.lineHeight['7x'] }
})

export const slideIn = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      animation: `0.5s ${animLineHeightDesktop}`
    }
  }
})

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})
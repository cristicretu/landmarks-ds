import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  opacity: 0,
  transition: 'all 0.8s',
})

export const variantsStart = styleVariants({
  slideUp: {
    transform: 'translateY(50px)',
  }
})

export const variantsEnd = styleVariants({
  slideUp: {
    transform: 'translateY(0px)',
    opacity: 1,
  }
})
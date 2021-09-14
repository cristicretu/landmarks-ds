import { style, styleVariants } from "@vanilla-extract/css"

export const collapse = style({
  borderBottom: '1px solid #ccc',
})

export const toggleVariant = styleVariants({
  open: {

  },
  closed: {

  }
})

export const icon = style({
  right: 0,
  top: '20px',
})

export const content = style({
  transition: 'all 0.3s',

  selectors: {
    [`${toggleVariant.open} &`]: {
      display: 'block',
    },
    [`${toggleVariant.closed} &`]: {
      display: 'none'
    }
  }
})
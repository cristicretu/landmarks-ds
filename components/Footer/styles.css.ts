import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const wrapper = style({
  backgroundColor: vars.color.neutral_2,
  padding: vars.spacing.large,
  color: vars.color.neutral_4,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize['-1x'],
})

export const links = style({
  display: 'flex',
  flexDirection: 'column'
})

export const fluidGrid = style({
  display: 'grid',
  gap: vars.spacing.small,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
})

// export const description = style({
//   gridColumn: 'span 2 / span 2'
// })

export const heading = style({
  fontFamily: vars.font.heading,
  fontSize: vars.fontSize['1x'],
  fontWeight: 'bold'
})

export const line = style({
  width: vars.spacing.large,
  border: `0.75px solid ${vars.color.neutral_3}`
})

export const text = style({
  textDecoration: 'none',
  color: vars.color.neutral_4
})

import { sprinkles } from '@styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const logo = style([
  sprinkles({
    position: 'relative',
    marginY: 'medium'
  }),
  {
    width: '300px',
    height: '40px'
  }
])

export const wrapper = style({
  backgroundColor: vars.color.neutral_0,
  paddingTop: vars.spacing.large,
  paddingBottom: vars.spacing.large,
  overflow: 'hidden',
  color: vars.color.neutral_4,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize['-1x']
})

export const line = style({
  width: vars.spacing.large,
  border: `0.75px solid ${vars.color.neutral_3}`
})

export const text = style({
  textDecoration: 'none',
  color: vars.color.link
})

export const socialContainer = style({
  gap: vars.spacing.medium
})

export const socialLink = style([
  sprinkles({
    color: 'neutral_3',
  }),
  {
    'selectors': {
      '&:hover': {
        color: vars.color.link
      }
    }
  }
])
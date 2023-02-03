import { sprinkles } from '@styles/sprinkles.css'
import { vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const tabsRoot = style({})
export const tabsList = style({})
export const tabsTrigger = style([
  sprinkles({
    padding: 'medium',
    cursor: 'pointer'
  }),
  {
    selectors: {
      '&:hover': {
        borderBottom: `3px solid ${vars.color.neutral_2}`
      },
      '[aria-selected="true"]&': {
        borderBottom: `3px solid ${vars.color.primary}`
      }
    }
  }
])
export const tabsContent = style({})


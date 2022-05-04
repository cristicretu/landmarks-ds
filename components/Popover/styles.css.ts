import { sprinkles } from '@styles/sprinkles.css'
import { vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const poiContent = style([
  sprinkles({
    background: 'white_alpha_08',
    boxShadow: 'medium',
    borderRadius: 'small',
    padding: 'medium',
  }),
  {
    maxWidth: '300px'
  }
])
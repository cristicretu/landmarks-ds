import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const pill = style([
  sprinkles({
    borderRadius: 'full',
    fontSize: '-2x',
    paddingX: 'small',
    textAlign: 'center',
    lineHeight: '1x',
  }),
  {
    minWidth: '40px',
  }
])
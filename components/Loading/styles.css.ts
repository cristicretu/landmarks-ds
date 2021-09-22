import { style } from "@vanilla-extract/css"

import { atoms } from "site/styles/sprinkles.css"
import { overwrites } from 'site/styles/theme.css'

export const loading = style([
  atoms({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    left: 0,
    right: 0,
    bottom: 0,
    height: `${overwrites.MENU_HEIGHT}px`,
    backgroundColor: 'rgba(1,1,1, .3)',
    zIndex: 5,
  }
])
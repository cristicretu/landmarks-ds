import { style } from "@vanilla-extract/css"

import { sprinkles } from "site/styles/sprinkles.css"
import { overwrites } from 'site/styles/theme.css'

export const loading = style([
  sprinkles({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'chrome',
  }),
  {
    left: 0,
    right: 0,
    bottom: 0,
    height: `${overwrites.MENU_HEIGHT}px`,
    zIndex: 5,
  }
])
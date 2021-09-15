import { style } from '@vanilla-extract/css'
import { MENU_SIZE } from '../components/MobileMenu/styles.css'

export const expanded = style({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
})

export const fullScreenHeight = style({
  height: `calc(100vh - ${MENU_SIZE}px)`
})
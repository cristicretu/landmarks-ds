import { style, globalStyle } from "@vanilla-extract/css"
import { vars } from "site/styles/theme.css"

export const form = style({

})

globalStyle(`${form} label`, {
  display: 'block',
})

globalStyle(`${form} input[type='text'], ${form} input[type='tel'], ${form} input[type='email'], ${form} textarea`, {
  WebkitAppearance: 'none',
  border: '2px solid #ccc',
  borderRadius: '3px',
  backgroundColor: vars.color.white,
  fontSize: '14px',
  display: 'block',
  width: '100%',
  padding: '8px',
})

export const error = style({
  color: 'red'
})
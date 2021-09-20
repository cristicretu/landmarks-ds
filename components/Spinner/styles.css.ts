import { globalStyle, style, keyframes } from "@vanilla-extract/css"
import { atoms } from "site/styles/sprinkles.css"

export const spinner = style([
  atoms({
    display: 'inline-block',
    position: 'relative',
  }),
  {
    width: '80px',
    height: '80px',
  }
])

const animation1 = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' }
})
const animation2 = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '100%': { transform: 'translate(24px, 0)' }
})
const animation3 = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)' }
})

globalStyle(`${spinner} div`, {
  position: 'absolute',
  top: '33px',
  width: '13px',
  height: '13px',
  borderRadius: '50%',
  animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
})

globalStyle(`${spinner} div:nth-child(1)`, {
  left: '8px',
  animation: `${animation1} 0.6s infinite`,
})

globalStyle(`${spinner} div:nth-child(2)`, {
  left: '8px',
  animation: `${animation2} 0.6s infinite`,
})

globalStyle(`${spinner} div:nth-child(3)`, {
  left: '32px',
  animation: `${animation2} 0.6s infinite`,
})

globalStyle(`${spinner} div:nth-child(4)`, {
  left: '56px',
  animation: `${animation3} 0.6s infinite`,
})
import { style, globalStyle, styleVariants, keyframes } from '@vanilla-extract/css'
import { breakpoints, vars } from 'site/styles/theme.css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const floorplanContainer = style([
  sprinkles({
    userSelect: 'none'
  }),
  {
    overflowX: 'auto',
    transform: 'scale(1)' // fix zIndex bugs with svg
  }
])

export const floorplanExpanded = style({
  minWidth: '1200px',

  '@media': {
    [breakpoints.x_tablet]: {
      minWidth: '1500px'
    },
    [breakpoints.xx_laptop]: {
      minWidth: 'auto'
    }
  }
})

export const containerSVG = sprinkles({
  position: 'relative',
  display: 'block',
  zIndex: 2
})

export const enabledBuildingSVG = style({})

export const buildingSVG = style({
  overflow: 'visible'
})

export const floor = style({})

export const building = style({
  fill: '#fff',
  opacity: 0,
  transition: 'all 0.3s',

  selectors: {
    [`${enabledBuildingSVG}:hover &`]: {
      cursor: 'pointer',
      opacity: 0.4
    }
  }
})

export const unit = style({
  fill: vars.color.secondary,
  cursor: 'pointer',
  overflow: 'visible',
  userSelect: 'none'
})

export const unitStatusVariants = styleVariants({
  disponibil: { fill: vars.color.secondary },
  rezervat: { fill: vars.color.disabled },
  vandut: { fill: vars.color.disabled },
  inactiv: { fill: vars.color.disabled }
})

const INITIAL_TEXT_OPACITY = 0.5
const INITIAL_BG_OPACITY = 0.8

globalStyle(`${unit} text`, {
  fill: '#fff',
  opacity: INITIAL_TEXT_OPACITY,
  transition: 'all 0.3s'
})

// Hack?
globalStyle(`${unit}:hover text`, {
  opacity: 1
})

globalStyle(`${unit} .cls-1`, {
  transition: 'all 0.3s',
  opacity: INITIAL_BG_OPACITY
})
globalStyle(`${unit}:hover .cls-1`, {
  opacity: 1
})

export const unitInactiv = style({})

export const pin = style([
  sprinkles({
    display: 'flex',
    background: 'white',
    borderRadius: 'small',
    overflow: 'hidden',
    cursor: 'pointer',
    marginLeft: 'medium',
    boxShadow: 'medium'
  }),
  {
    height: '80px',
    userSelect: 'none'
  }
])

export const foreignObject = style({
  transition: 'all 0.3s',
  selectors: {
    [`${enabledBuildingSVG}:hover &`]: {
      transform: 'translateY(-20px) !important'
    }
  }
})

export const pinTitle = style([
  sprinkles({
    background: 'primary',
    color: 'white',
    padding: 'medium',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'heading',
    fontSize: '6x',
    lineHeight: '2x'
  }),
  {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    selectors: {
      [`${enabledBuildingSVG} &`]: {
        backgroundColor: vars.color.secondary
      }
    }
  }
])

export const pinDescription = sprinkles({
  color: 'onLight',
  fontSize: '-1x',
  lineHeight: '1x',
  padding: 'medium'
})

export const poi = style([sprinkles({
})])

const pulse = keyframes({
  '0%': {
    boxShadow: '0 0 0 0 rgba(255,255,255, 0.8)'
  },

  '70%': {
    boxShadow: '0 0 0 20px rgba(255,255,255, 0)'
  },

  '100%': {
    boxShadow: '0 0 0 0 rgba(255,255,255, 0)'
  }
})

export const poiTriggerContainer = sprinkles({
  textAlign: 'center'
})

export const poiTrigger = style([
  sprinkles({
    cursor: 'pointer',
    overflow: 'hidden'
  }),
  {
    boxShadow: '0 0 0 0 rgba(255,255,255, 1)',
  }
])

export const poiDot = style([
  sprinkles({
    display: 'block',
    borderRadius: 'full',
    margin: 'large',
    transition: 'all 0.3s'
  }),
  {
    width: '30px',
    height: '30px',
    border: `3px solid ${vars.color.white}`,
    animation: `${pulse} 1.5s infinite`,
    ':hover': {
      boxShadow: '0 0 0 4px rgba(255,255,255, 1)',
      animation: 'none'
    }
  }
])
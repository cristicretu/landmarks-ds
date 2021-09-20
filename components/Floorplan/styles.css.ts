import { style, globalStyle, styleVariants } from '@vanilla-extract/css'
import { breakpoints, vars } from 'site/styles/theme.css'
import { atoms } from 'site/styles/sprinkles.css'

export const floorplanContainer = style({
  overflowX: 'auto',
  transform: 'scale(1)', // fix zIndex bugs with svg
})

export const floorplanExpanded = style({
  minWidth: '1200px',

  '@media': {
    [breakpoints.x_tablet]: {
      minWidth: '1500px',
    },
    [breakpoints.xx_laptop]: {
      minWidth: 'auto',
    }
  }
})

export const containerSVG = atoms({
  position: 'relative',
  display: 'block',
  zIndex: 2
})

export const enabledBuildingSVG = style({

})

export const buildingSVG = style({
  overflow: 'visible',
})

export const floor = style({
})

export const building = style({
  fill: '#fff',
  opacity: 0,
  transition: 'all 0.3s',

  selectors: {
    [`${enabledBuildingSVG}:hover &`]: {
      cursor: 'pointer',
      opacity: 0.2,
    },
  }
})

export const unit = style({
  fill: vars.color.secondary,
  cursor: 'pointer',
  overflow: 'visible',
  userSelect: 'none',
})

export const unitStatusVariants = styleVariants({
  disponibil: { fill: vars.color.secondary },
  rezervat: { fill: vars.color.disabled },
  vandut: { fill: vars.color.disabled },
  inactiv: { fill: vars.color.disabled },
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
  opacity: INITIAL_BG_OPACITY,
})
globalStyle(`${unit}:hover .cls-1`, {
  opacity: 1
})

globalStyle(`${unit} .cls-2`, {
  fontSize: 40,
  fontWeight: 500,
})

globalStyle(`${unit} .cls-3`, {
  fontSize: 10,
})

// Keep this last to overwrite CSS
export const unitInactiv = style({
  cursor: 'default'
})
globalStyle(`${unitInactiv}:hover text`, {
  opacity: INITIAL_TEXT_OPACITY
})
globalStyle(`${unitInactiv}:hover .cls-1`, {
  opacity: INITIAL_BG_OPACITY,
})

export const pin = style({
  display: 'flex',
  height: '80px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  boxShadow: '-6px 3px 6px rgba(0,0,0, 0.3)',
  marginLeft: '10px',
  userSelect: 'none',
  cursor: 'pointer',
})

export const foreignObject = style({
  transition: 'all 0.3s',
  selectors: {
    [`${enabledBuildingSVG}:hover &`]: {
      transform: 'translateY(-20px) !important',
    }
  }
})

export const pinTitle = style({
  padding: '10px',
  backgroundColor: '#D5D5D5',
  borderTopLeftRadius: '5px',
  borderBottomLeftRadius: '5px',
  textTransform: 'uppercase',
  fontSize: '40px',
  lineHeight: '26px',
  color: vars.color.white,
  fontWeight: 'bold',
  selectors: {
    [`${enabledBuildingSVG} &`]: {
      backgroundColor: vars.color.brand
    }
  }
})

export const pinTitleSmall = style({
  fontSize: '10px',
  display: 'block',
})

export const pinDescription = style({
  alignSelf: 'center',
  padding: '10px',
  color: '#8B8B8B',
  fontSize: '14px',
  lineHeight: '16px',
})

export const arrowDown = style({
  width: 0,
  height: 0,
  borderLeft: '15px solid transparent',
  borderRight: '15px solid transparent',
  borderTop: `15px solid #D5D5D5`,
  position: 'absolute',
  left: '19px',
  bottom: '5px',
  selectors: {
    [`${enabledBuildingSVG} &`]: {
      borderTopColor: vars.color.brand
    }
  }
})
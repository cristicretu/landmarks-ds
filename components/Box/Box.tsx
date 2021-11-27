import { createElement, AllHTMLAttributes, ElementType, Ref } from 'react'
import cn from 'classnames'
// import * as resetStyles from '../styles/reset.css'
import { atoms, Atoms } from 'site/styles/sprinkles.css'

export interface BoxProps extends Omit<
  AllHTMLAttributes<HTMLElement>,
  'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'size'
>,
  Atoms {
  component?: ElementType
  innerRef?: Ref<HTMLElement>
}

export const Box = ({
  component = 'div',
  className,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  overflow,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  position,
  top,
  bottom,
  left,
  right,
  background,
  color,
  order,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  textTransform,
  fontSize,
  fontFamily,
  innerRef,
  ...restProps
}: BoxProps) => {
  // TODO: get reset to work https://github.com/seek-oss/vanilla-extract/discussions/301
  const atomClasses = atoms({
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    display,
    overflow,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
    background,
    color,
    order,
    width,
    zIndex,
    opacity,
    pointerEvents,
    cursor,
    textAlign,
    fontSize,
    fontFamily,
    textTransform,
  })

  return createElement(component, {
    className: cn(atomClasses, className),
    ref: innerRef,
    ...restProps
  })
}

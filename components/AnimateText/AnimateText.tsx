import { Children, cloneElement, ReactElement } from 'react'
import { InView } from 'react-intersection-observer'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'

import * as styles from './styles.css'

interface IProps extends IUIComponent {
  variant: 'select'
  children: ReactElement | ReactElement[]
}

/**
 * Animations use :after pseudo element. You can customize them from css using that selector
 */
export function AnimateText({ variant, children, ...rest }: IProps) {
  if (variant === 'select') {
    return (
      <InView>
        {({ inView, ref }) => {
          return (
            <Box innerRef={ref} {...rest}>
              {Children.map(children, (child) => (
                cloneElement(child, {
                  className: cn(child.props.className, {
                    [styles.selectRight]: inView,
                  })
                })
              ))}
            </Box>
          )
        }}
      </InView>
    )
  } else {
    throw new Error(`<AnimateText variant={${variant}} /> is invalid`)
  }
}
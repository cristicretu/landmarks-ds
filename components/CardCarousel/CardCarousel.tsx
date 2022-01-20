import * as styles from './styles.css'
import cn from 'classnames'

import React, { Children, cloneElement } from 'react'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: any
}

export function CardCarousel({ children, className, columns = 2, ...rest }: IProps & styles.TCardCarouselRecipe) {
  const decoratedChildren = Children.map(children, (child) =>
    cloneElement(child, {
      className: styles.card
    })
  )
  return <Box className={cn(styles.cardCarouselRecipe({ columns }), className)}>{decoratedChildren}</Box>
}

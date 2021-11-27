import { ReactElement } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { Box } from "../Box"
import * as styles from './styles.css'
import { overwrites } from 'site/styles/theme.css'

interface IProps extends IUIComponent {
  variant: keyof typeof styles.variantsStart
  children: ReactElement | ReactElement[]
}

export function Section({ children, className, variant, ...rest }: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px -${overwrites.MENU_HEIGHT * 2}px 0px`,
  })

  return (
    <Box
      className={cn(className, styles.base, styles.variantsStart[variant], {
        [styles.variantsEnd[variant]]: inView,
      })}
      component="section"
      innerRef={ref}
      {...rest}>
      {children}
    </Box>
  )
}
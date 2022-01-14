import { ReactElement } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { Box } from "../Box"
import * as styles from './styles.css'
import { overwrites } from 'site/styles/theme.css'

interface IProps extends IUIComponent {
  variant: keyof typeof styles.variantsStart
  children: ReactElement | ReactElement[]
  backgroundImageUrl?: string
}

export function Section({ children, className, variant, backgroundImageUrl, ...rest }: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px -${overwrites.MENU_HEIGHT * 2}px 0px`,
  })

  return (
    <Box
      className={cn(className, styles.container, styles.variantsStart[variant], {
        [styles.variantsEnd[variant]]: inView,
      })}
      component="section"
      innerRef={ref}
      {...rest}>
      {backgroundImageUrl && (
        <Image
          src={backgroundImageUrl}
          className={styles.backgroundImage}
          layout="fill"
          objectFit="cover" />
      )}
      {children}
    </Box>
  )
}
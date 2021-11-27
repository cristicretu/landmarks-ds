import { ReactElement } from 'react'
import { IUIComponent } from '../../utils/types'

import { Box } from "../Box"
import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
}

export function Pill({ children, ...rest }: IProps) {
  return (
    <Box
      component="span"
      className={styles.pill}
      {...rest}>
      {children}
    </Box>
  )
}
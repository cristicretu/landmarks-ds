import { ReactElement } from 'react'

import { Atoms } from "site/styles/sprinkles.css"
import { IUIComponent } from '../../utils/types'
import { Box } from "../Box"

interface IProps extends Atoms, IUIComponent {
  value: number
  index: number
  children: ReactElement | ReactElement[] | string
}

export function TabPanel({ value, index, children, ...rest }: IProps) {
  const selected = value === index

  if (!selected) {
    return null
  }

  return (
    <Box {...rest}>
      {children}
    </Box>
  )
}
import { ReactElement } from 'react'

import { Atoms } from "../../../styles/sprinkles.css"
import { Box } from "../Box"

interface IProps extends Atoms {
  value: number
  index: number
  children: ReactElement | string
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
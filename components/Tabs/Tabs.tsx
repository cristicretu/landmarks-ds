import { ReactElement, Children, cloneElement } from 'react'

import { Atoms } from '../../../styles/sprinkles.css'
import { Box } from '../Box'

interface IProps extends Atoms {
  value: number
  children: ReactElement[]
  onChange: Function
}

export function Tabs({ value, children, onChange, ...rest }: IProps) {
  const cloned = Children.map(children, (child, i) => {
    return cloneElement(child, {
      selected: i === value,
      onClick: () => onChange(i),
    })
  })

  return (
    <Box display="flex" {...rest}>
      {cloned}
    </Box>
  )
}
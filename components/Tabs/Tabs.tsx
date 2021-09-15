import { ReactElement, Children, cloneElement } from 'react'

import { Atoms } from 'site/styles/sprinkles.css'
import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'


interface IProps extends Atoms, IUIComponent {
  value: number
  children: ReactElement[]
  onChange: Function

  selectedClassName?: string
}

export function Tabs({ value, children, onChange, selectedClassName, ...rest }: IProps) {
  const cloned = Children.map(children, (child, i) => {
    return cloneElement(child, {
      onClick: () => onChange(i),
      ... (i === value) && {
        selected: true,
        className: selectedClassName
      }
    })
  })

  return (
    <Box
      display="flex"
      justifyContent={{ mobile: 'space-between', desktop: 'flex-start' }}
      {...rest}>
      {cloned}
    </Box>
  )
}
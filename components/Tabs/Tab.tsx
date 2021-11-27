import { ReactElement } from 'react'

import { Box } from "../Box"
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: ReactElement | ReactElement[] | string
  selected?: boolean
  onClick?: Function
}

export function Tab({ children, selected, onClick, ...rest }: IProps) {
  return (
    <Box
      paddingX={{ mobile: 'medium', laptop: 'large' }}
      paddingY="medium"
      cursor="pointer"
      onClick={handleClick} {...rest}>
      {children}
    </Box>
  )

  function handleClick() {
    onClick && onClick()
  }
}
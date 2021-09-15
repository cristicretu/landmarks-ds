import { ReactElement } from 'react'

import { Box } from "../Box"
import { Atoms } from 'site/styles/sprinkles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends Atoms, IUIComponent {
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
      marginX={{ mobile: '-large', laptop: 'none' }}
      onClick={handleClick} {...rest}>
      {children}
    </Box>
  )

  function handleClick() {
    onClick && onClick()
  }
}
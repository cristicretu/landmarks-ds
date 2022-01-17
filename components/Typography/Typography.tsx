import cn from 'classnames'
import { IUIComponent } from "../../utils/types"
import { Box } from "../Box"

import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
}

export function Typography({ className, children, variant, ...rest }: IProps & styles.THeadingRecipe) {
  return (
    <Box
      className={cn(className, styles.headingRecipe({
        variant
      }))}
      {...rest}>
      {children}
    </Box>
  )
}
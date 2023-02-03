import { vars } from "site/styles/theme.css"
import cn from 'classnames'
import { IUIComponent } from "../../utils/types"
import { Box } from "../Box"

interface IProps extends IUIComponent {
  children: string
  fontSizeLarge?: keyof typeof vars.fontSize
  fontSizeSmall?: keyof typeof vars.fontSize
}

export function SplitText({
  children,
  className,
  fontSizeLarge = "2x",
  fontSizeSmall = "-1x",
  ...rest
}: IProps) {
  const [firstWord, ...otherWords] = children.split(' ')
  return (
    <Box className={cn(className)} {...rest}>
      <Box component="p" fontSize={fontSizeSmall}>{firstWord}</Box>
      <Box component="p" fontSize={fontSizeLarge}>{otherWords.join(' ')}</Box>
    </Box>
  )
}
import { Box } from '../Box'
import { vars } from 'site/styles/theme.css'
import * as styles from '../Spinner/styles.css'

interface IProps {
  background?: keyof typeof vars.color
}

export function Spinner({ background = 'white' }: IProps) {
  return (
    <div className={styles.spinner}>
      <Box background={background} />
      <Box background={background} />
      <Box background={background} />
      <Box background={background} />
    </div>
  )
}
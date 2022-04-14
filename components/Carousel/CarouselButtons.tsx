import { Box, Button } from 'landmarks-ds'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import cn from 'classnames'
import * as style from './styles.css'

interface IDotButtonProps {
  selected: boolean
  onClick: any
}

export const DotButton = ({ selected, onClick }: IDotButtonProps) => (
  <button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type="button"
    onClick={onClick}
  />
)

interface INavButtonProps {
  enabled: boolean
  onClick: any
}

export const PrevButton = ({ enabled, onClick }: INavButtonProps) => (
  <Box className={cn(style.emblaButton, style.leftButton)}>
    <Button variant="text" onClick={onClick} disabled={!enabled}>
      <Box component={MdChevronLeft} fontSize="5x" />
    </Button>
  </Box>
)

export const NextButton = ({ enabled, onClick }: INavButtonProps) => (
  <Box className={cn(style.emblaButton, style.rightButton)}>
    <Button variant="text" onClick={onClick} disabled={!enabled}>
      <Box component={MdChevronRight} fontSize="5x" />
    </Button>
  </Box>
)

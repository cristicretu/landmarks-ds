import { useState, ReactElement } from "react"
import { Box } from "../Box"
import { Atoms } from "../../../system/styles/sprinkles.css"

interface IProps extends Atoms {
  onReveal: () => void
  before: ReactElement
  after: ReactElement
}

export function Reveal({ before, after, onReveal, ...rest }: IProps) {
  const [isVisible, setVisibile] = useState(false)

  return (
    <Box component="span" onClick={handleClick} {...rest}>
      {isVisible ? after : before}
    </Box>
  )

  function handleClick() {
    if (!isVisible) {
      onReveal()
    }
    setVisibile(true)
  }
}
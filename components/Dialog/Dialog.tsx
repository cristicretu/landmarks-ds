import * as DialogRadix from '@radix-ui/react-dialog'
import { Box } from 'landmarks-ds'
import { IUIComponent } from 'landmarks-ds/utils/types'
import { MdClose } from 'react-icons/md'
import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
  cta: any
}

export function Dialog({ children, cta, ...rest }: IProps) {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{cta}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className={styles.overlay}>
          <Box component={DialogRadix.Content} className={styles.dialog} {...rest}>
            {children}
            <DialogRadix.Close className={styles.closeBtn} asChild>
              <Box component={MdClose} fontSize="2x" />
            </DialogRadix.Close>
          </Box>
        </DialogRadix.Overlay>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}

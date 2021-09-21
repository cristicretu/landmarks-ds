import cn from 'classnames'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Atoms } from 'site/styles/sprinkles.css'
import { CUSTOM_EVENTS, logEvent } from '../../utils/gtm'
import { Box } from '../Box'

import { Button } from '../Button'
import { H1, H3 } from '../Headings'
import * as styles from './styles.css'

interface IProps extends Atoms {
  // projectTitle: string
  // buildingSlug: string
  // unitSlug: string
  className?: string
  classes?: {
    submit?: string
  }
}

type Inputs = {
  nume: string
  email: string
  telefon: string
  mesaj: string
  sursa: string
  acordPolitica: boolean
  acordInformari: boolean
}

export function SubmitLeadForm({ className, classes, ...rest }: IProps) {
  const { register, handleSubmit, formState } = useForm<Inputs>()
  const { errors, isSubmitSuccessful, isSubmitting } = formState

  if (isSubmitSuccessful) {
    return (
      <Box paddingY="xxlarge">
        <H1>Mulțumim</H1>
        <p>Cererea a fost trimisă. O să vă contactăm în cel mai scurt timp</p>
      </Box>
    )
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
      className={cn(styles.form, className)}>
      <Box paddingY="small">
        <label htmlFor="inputNume">Nume</label>
        <input id="inputNume" {...register('nume', { required: 'Vă rugăm să vă introduceți numele' })} type="text" />
        {errors.nume && <div className={styles.error}>{errors.nume.message}</div>}
      </Box>
      <Box paddingY="small">
        <label htmlFor="inputTelefon">Telefon</label>
        <input id="inputTelefon" {...register('telefon', {
          required: 'Vă rugăm să introduceți numărul de telefon',
        })} type="tel" />
        {errors.telefon && <div className={styles.error}>{errors.telefon.message}</div>}
      </Box>
      <Box paddingY="small">
        <label htmlFor="inputEmail">Email</label>
        <input id="inputEmail" {...register('email', {
          required: 'Introduceți adresa de email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Adresa de email este invalidă'
          }
        })} type="email" />
        {errors.email && <div className={styles.error}>{errors.email.message}</div>}
      </Box>
      <Box paddingY="small">
        <label htmlFor="inputMesaj">Mesaj</label>
        <textarea id="inputMesaj" {...register('mesaj')} />
      </Box>
      <Box paddingY="small">
        <label>
          <input type="checkbox" {...register('acordPolitica', { required: 'Este necesar acordul dumneavoastră' })} /> am luat la cunoștintă politica de confidențialitate
          {errors.acordPolitica && <div className={styles.error}>{errors.acordPolitica.message}</div>}
        </label>
        <label>
          <input type="checkbox" {...register('acordInformari')} /> sunt de acord să primesc informări comerciale referitoare la proiectul Cartierul Soarelui
        </label>
      </Box>
      <Box paddingY="small">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="regular"
          className={classes?.submit}>
          {isSubmitting ? '...' : 'Trimite'}
        </Button>
      </Box>
      {/* <small>Acest material nu reprezintă o oferta sau un contract și are scop informativ. Prețurile prezentate sunt orientative, nu reprezintă oferta de vânzare și pot suferi modificări. Datorită schimbărilor ce pot interveni pe durata construcției, suprafețele, finisajele și specificațiile tehnice pot suferi modificări fără o notificare prealabilă dar în deplină concordanțâ cu orice contract semnat. Apartamentele se livrează semifinisate.</small> */}
    </Box>
  )

  async function onSubmit(data: Inputs) {
    const finalData = {
      ...data,
      // unit: `${projectTitle}/${buildingSlug}/${unitSlug}`,
      day: new Date().getDate().toString() + "-" + (new Date().getMonth() + 1).toString() + "-" + new Date().getFullYear().toString()
    }
    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        body: JSON.stringify(finalData)
      })
      logEvent(CUSTOM_EVENTS.SUBMIT_LEAD, {
        success: true
      })
    } catch (e) {
      logEvent(CUSTOM_EVENTS.SUBMIT_LEAD, {
        success: false
      })
    }
  }
}
import flatten from "lodash/flatten"
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import set from 'lodash/set'
import { EUnitStatus, ISize } from './types'

// https://nextjs.org/docs/advanced-features/i18n-routing#dynamic-getstaticprops-pages
export function addLocaleToPaths(locales: string[], paths: any[]): any[] {
  const localizedPaths = locales.map(locale => {
    return paths.map(path => Object.assign({}, path, { locale }))
  })
  return flatten(localizedPaths)
}

/**
 * We use this to call already deployed nextjs apis at build time
 */
export async function fetchUnits(sheetTitle: string): Promise<any[]> {
  const rawResponse = await fetch(`${process.env.APP_URL}/api/get-units?secret=${process.env.API_SECRET}&sheetTitle=${sheetTitle}`)
  const { data } = await rawResponse.json()
  return data
}

export function isAvailable(status: string): boolean {
  return status === EUnitStatus.disponibil
}

export function getDefaultLocale(locale: string | undefined, defaultLocale: string | undefined): string {
  return locale || defaultLocale || 'ro'
}

/**
 * To handle translations in keyston, I use json fields with language keys
 * description = { en: 'Hi', ro: 'Salut', etc }
 * This function only keeps the curent language translation : description = 'Salut' because next generates a page for each locale
 */
export function keepTranslationsFor(source: any | any[], translatedFields: string[], lang: string) {
  if (isArray(source)) {
    return source.map(strip)
  }

  return strip(source)

  function strip(item: any) {
    translatedFields.forEach((field) => {
      const fieldValue = get(item, field)
      const hasTranslation = !!fieldValue && typeof fieldValue === 'object'

      // MUTATE OBJECT
      if (hasTranslation) {
        set(item, field, fieldValue[lang])
      }
    })

    return item
  }
}

/**
 * Hacky way to strip translations from fields like content_ro/content_en/etc
 */
export function keepDocumentTranslationFor(source: any, translatedField: string, lang: string) {
  return Object.keys(source).reduce((acc: any, key: string) => {
    const [_, fieldLang] = key.split('_')
    const value = source[key]
    if (fieldLang) {
      if (fieldLang === lang) {
        acc[translatedField] = value // keep only translated field content
      }
    } else {
      acc[key] = value // keep values without translations
    }
    return acc
  }, {})
}

/**
 * Calculate total appartment or terrace size
 */
export function getTotalSize(items: ISize[]): number {
  if (!items) {
    return 0
  }
  return Math.round(items.reduce((acc, current) => acc + parseFloat(current.size), 0))
}

export function extractFirstNumber(str: string): string | null {
  const match = str.match(/(\d+)/)
  return match ? match[0] : null
}

/**
 * Some strings contain bulshit that we want to strip.
 * With this function we want to try and remove that
 */
export function splitAndGet(str: string, separator: string, get: number): string {
  const sections = str.split(separator)
  return sections[get] || str
}

/**
 * Combine db data with sheets data (adds price and availability)
 */
export function mergeUnitData(dbUnits: any, sheetUnits: any) {
  return dbUnits.map((unit: any) => {
    const matchingUnit = sheetUnits.find((sheetUnit: any) => sheetUnit.id === unit.id)
    return {
      ...unit,
      ...matchingUnit
    }
  })
}

export function noop() {}
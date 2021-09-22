import { EUnitStatus } from "./types";

export function isAvailable(status: string): boolean {
  return status === EUnitStatus.disponibil
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
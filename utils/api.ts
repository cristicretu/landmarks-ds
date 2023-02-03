import qs from 'query-string'

export const API_ENDPOINTS = {
  UPDATE_SHEET: 'update-sheet',
  SAVE_LEAD: 'save-lead',
  GET_UNITS: 'get-units',
}

/**
 * compose the API url
 */
export function getApiUrl(endpoint: string, query: { [key: string]: any } = {}): string {
  const params = qs.stringify({
    ...query,
    secret: process.env.API_SECRET,
    documentId: process.env.DOCUMENT_ID,
  })
  return `${process.env.API_URL}/api/${process.env.API_STORAGE}/${endpoint}?${params}`
}

/**
 * We use this to call already deployed nextjs apis at build time
 */
export async function fetchUnits(sheetTitle: string): Promise<any[]> {
  const url = getApiUrl(API_ENDPOINTS.GET_UNITS, { sheetTitle })
  const rawResponse = await fetch(url)
  const { data } = await rawResponse.json()
  return data || []
}

export async function updateSheet(data: any): Promise<any> {
  const url = getApiUrl(API_ENDPOINTS.UPDATE_SHEET)
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data }),
  })
  const { data: responseData } = await rawResponse.json()
  return responseData
}
export const CUSTOM_EVENTS = {
  SHOW_PHONE: 'custom-show-phone',
  SUBMIT_LEAD: 'custom-submit-lead',
  CHAT_WHATSAPP: 'custom-chat-whatsapp',
}

export function logEvent(eventName: string, variables: any = {}) {
  console.log(`triggering custom GTM event ${eventName}`)
  // @ts-ignore
  window.dataLayer.push({
    event: eventName,
    ...variables
  })
}
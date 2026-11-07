const euros = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

export function formatPrice(cents) {
  return euros.format(cents / 100)
}

export function formatDuration(minutes) {
  if (!minutes) return null
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours} h ${String(rest).padStart(2, "0")}` : `${hours} h`
}

export function whatsappLink(number) {
  return `https://wa.me/${number.replace(/\D/g, "")}`
}

export function phoneLink(number) {
  return `tel:${number.replace(/[\s.]/g, "")}`
}

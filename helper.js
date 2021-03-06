export const setPageData = (store, { resource, slug }) => {
  if (process.browser) {
    setTimeout(() => {
      store.dispatch('set', { resource: resource, slug: slug })
    }, 350)
  } else {
    store.dispatch('set', { resource: resource, slug: slug })
  }
}

export const fullUrl = () => {
  return `${window.location.protocol}//${window.location.host}/${window.location.pathname}`
}

export const getFormattedDate = (date) => {
  const months = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december'
  ]
  const dateObj = new Date(date)

  return `${dateObj.getDate()} ${months[dateObj.getMonth()]} 
    ${dateObj.getFullYear()}`
}

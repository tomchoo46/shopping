export default (value) => {
  if (typeof value !== 'number') {
    return value
  }
  return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(value)
}
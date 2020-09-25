const required = (propertyType) => {
  return (v) => (v && v.length > 0) || `Anda harus input ${propertyType}`
}

const minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} tidak boleh kurang dari ${minLength} karakter`
}

const maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} tidak boleh lebih dari ${maxLength} karakter`
}

const emailFormat = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return (v) => (v && regex.test(v)) || 'Harus merupakan email yang valid'
}

const numberFormat = () => {
  const regex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
  return (v) => (v && regex.test(v)) || 'Anda harus input angka'
}

export default { required, minLength, maxLength, emailFormat, numberFormat }

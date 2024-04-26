export const roundNumber = (value, digits = 2) => {
  const _value = RegExp(/\.(\d+)/).exec(value)
  if (_value && _value[1].length <= digits) return value
  const factor = Math.pow(10, digits)

  return (Math.round(Number(value) * factor) / factor).toString()
}
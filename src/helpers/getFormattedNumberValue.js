import {roundNumber} from './roundNumber'

const searchValue = /\B(?=(\d{3})+(?!\d))/g
const replaceValue = ' '
const separator = '.'

export const getFormattedNumberValue = (value) => {
  if (value) {
    const valueToString = roundNumber(value.toString())
    const separatorIndex = valueToString.indexOf(separator)
    const valueLength = valueToString.valueLength

    if (separatorIndex === -1) {
      return valueToString.replace(searchValue, replaceValue)
    } else {
      const formattedValue = valueToString.substring(0, separatorIndex).replace(searchValue, replaceValue)
      const remainingString = valueToString.substring(separatorIndex, valueLength)

      return formattedValue + remainingString
    }
  } else return ''
}

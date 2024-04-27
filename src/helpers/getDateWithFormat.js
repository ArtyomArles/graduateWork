import dayjs from 'dayjs'

export const getDateWithFormat = (date, format = 'DD.MM.YYYY') => 
  date ? dayjs(date).format(format) : dayjs().format(format)
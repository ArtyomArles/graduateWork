import dayjs from 'dayjs'

export const getConvertedDate = (date) => date ? dayjs(date.toString()) : null
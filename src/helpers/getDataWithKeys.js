import {uniqueId} from 'lodash'

export const getDataWithKeys = (data) => data.map((item) => ({...item, key: uniqueId()}))
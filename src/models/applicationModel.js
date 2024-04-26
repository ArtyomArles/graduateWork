import Api from '../api'
import {message} from 'antd'

export default class ApplicationModel {
  route = ''
  icon = null
  caption = ''
  indexCaption = ''
  indexComponent = null
  formComponent = null
  entity = null
  initialState = null
  canCreate = true
  readOnly = false

  constructor (entity) {
    if (entity) {
      this.entity = entity
    }
  }

  async edit() {
    const result = await Api.post(`${this.route}/edit`, this.entity)
    if (result) {
      message.success('Запись успешно изменена', 2)
      return result
    }
    message.error('Что-то пошло не так', 2)
  }

  async save() {
    const result = await Api.post(`${this.route}/create`, this.entity)
    if (result) {
      message.success('Запись успешно сохранена', 2)
      return result
    }
    message.error('Что-то пошло не так', 2)
  }

  async delete() {
    const result = await Api.post(`${this.route}/delete/${this.entity.id}`)
    if (result) {
      message.success('Запись успешно удалена', 2)
      return result
    }
    message.error('Что-то пошло не так', 2)
  }

  static async search(params, prefix) {
    const result = await Api.get(`${this.route}/search`, params, prefix)
    if (result) {
      return result
    } 
    message.error('Что-то пошло не так', 2)
    return []
  }

  static async find(id) {
    const result = await Api.get(`${this.route}/${id}`)
    return result
  }

  static get route() {
    return new this().route
  }

  static get icon() {
    return new this().icon
  }

  static get indexComponent() {
    return new this().indexComponent
  }

  static get formComponent() {
    return new this().formComponent
  }

  static get entity() {
    return new this().entity
  }

  static get caption() {
    return new this().caption
  }

  static get indexCaption() {
    return new this().indexCaption
  }

  static get initialState() {
    return new this().initialState
  }

  static get canCreate() {
    return new this().canCreate
  }

  static get readOnly() {
    return new this().readOnly
  }
}

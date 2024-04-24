import Api from '../api'

export default class ApplicationModel {
  route = ''
  icon = null
  caption = ''
  indexCaption = ''
  indexComponent = null
  formComponent = null
  entity = null
  initialState = null

  constructor (entity) {
    if (entity) {
      this.entity = entity
    }
  }

  async edit() {
    const result = await Api.post(`${this.route}/edit`, this.entity)
    return result
  }

  async save() {
    const result = await Api.post(`${this.route}/create`, this.entity)
    return result
  }

  static async search(params, prefix) {
    const result = await Api.get(`${this.route}/search`, params, prefix)
    return result
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
}

import aspectRatio from './aspect-ratio/index.js'
import './aspect-ratio/index.less'

export default {
  install (Vue) {
    Vue.component(aspectRatio.name, aspectRatio)
  }
}
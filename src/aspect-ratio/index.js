/* eslint-disable no-constant-condition */

export default {
  name: 'TgAspectRatio',
  props: {
    w: {
      type: [Number, String],
      validator (value) {
        do {
          if (value === '0') break
          if (value === 0) break

          return true
        } while (false)

        return false
      }
    },
    h: [Number, String],
  },
  computed: {
    ratio () {
      return (parseInt(this.h) / parseInt(this.w) * 100).toFixed(2)
    }
  },
  render (h) {
    return h('div', {
      class: 'tg-aspect-ratio',
      style: {
        paddingTop: this.ratio + '%'
      }
    }, [
      h('div', { class: 'tg-aspect-ratio-content' }, this.$slots.default)
    ])
  }
}
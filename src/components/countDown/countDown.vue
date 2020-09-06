<template>
  <div class="countdown-class" v-bind:class="classObj">{{ prefix }}{{ time }}</div>
</template>
<script>
export default {
  props: {
    restart: {
      type: Boolean,
      default: false
    },
    target: {
      type: Number,
      default: 0
    },
    countUp: {
      type: Boolean,
      default: false
    },
    showDay: {
      type: Boolean,
      default: false
    },
    callback: {
      type: String,
      default: ''
    },
    format: {
      type: Array,
      default: []
    },
    clearTimer: {
      type: Boolean,
      default: false
    },
    iClass: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      time: '',
      resultFormat: [],
      changeFormat: false
    }
  },
  mounted() {
    this.getFormat()
  },
  computed: {
    classObj() {
      return this.iClass
    }
  },
  watch: {
    target: {
      deep: true,
      immediate: true,
      handler(newVal, oldVal) {
        console.log('target:' + newVal)
        if (newVal) {
          this.getFormat()
        }
      }
    },
    restart: {
      deep: true,
      immediate: true,
      handler(newVal, oldVal) {
        console.log('restart:' + newVal)
        if (newVal) {
          this.getFormat()
        }
      }
    }
  },
  methods: {
    getFormat() {
      this.time = ''
      this.resultFormat = []
      this.changeFormat = false

      const len = this.format.length
      // if (this.showDay && this.showDay !== 'false') {
      //   this.resultFormat.push('')
      // }
      if (len >= 3) {
        this.changeFormat = true
        for (let i = 0; i < len; i++) {
          if (this.resultFormat.length >= 4) break
          if (this.format[i]) {
            this.resultFormat.push(this.format[i].toString())
          }
        }
      }
      this.getLastTime()
    },
    init() {
      setTimeout(() => {
        this.getLastTime()
      }, 1000)
    },
    getLastTime() {
      let gapTime = Math.ceil((this.target - new Date().getTime()) / 1000)
      if (this.countUp) {
        gapTime = 0 - gapTime
      }
      let result = ''
      let time = '00:00:00'
      let day = '0'
      let format = this.resultFormat
      if (gapTime > 0 || this.countUp) {
        day = parseInt(gapTime / 86400)
        if (day === 0) {
          this.showDay = false
        }
        let lastTime = gapTime % 86400
        let hour = this.formatNum(parseInt(lastTime / 3600))
        lastTime = lastTime % 3600
        let minute = this.formatNum(parseInt(lastTime / 60))
        let second = this.formatNum(lastTime % 60)
        if (this.changeFormat) {
          if (hour !== '00') {
            time = `${hour}${format[1]}`
          } else {
            time = ''
          }
          time += `${minute}${format[2]}${second}${format[3]}`
        } else {
          if (hour !== '00') {
            time = `${hour}:`
          } else {
            time = ''
          }
          time += `${minute}:${second}`
        }
        if (!this.clearTimer || this.clearTimer === 'false') {
          this.init()
        }
      } else {
        this.showDay = false
        let hour = '00'
        let minute = '00'
        let second = '00'
        if (this.changeFormat) {
          time = `${minute}${format[2]}${second}${format[3]}`
        } else {
          time = `${minute}:${second}`
        }
        if (!this.countUp) {
          this.endfn()
        }
      }
      if (this.showDay && this.showDay !== 'false') {
        if (this.changeFormat) {
          result = `${day}${format[0]}${time}`
        } else {
          result = `${day}d ${time}`
        }
      } else {
        result = time
      }
      this.time = result
    },
    formatNum(num) {
      return num > 9 ? num : `0${num}`
    },
    endfn() {
      this.$emit('callback', {})
    }
  }
}
</script>

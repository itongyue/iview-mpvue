<template>
  <div class="i-avatar" :class="[iClass, 'i-avatar-' + shape, 'i-avatar-' + size, src ? 'i-avatar-image' : '']">
    <img :src="src" v-if="src"></img>
    <div class="i-avatar-string" v-else><slot></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    iClass: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'circle'
    },
    size: {
      type: String,
      default: 'default'
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

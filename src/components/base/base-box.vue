<template>
  <div class="column">
    <div class="text-weight-bold text-subtitle1">
      {{ label }}
    </div>
    <q-separator spaced="8px"/>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-box',
  props: {
    label: String
  }
}
</script>

<style scoped>

</style>

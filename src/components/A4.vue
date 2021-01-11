<template>
  <div class="a4">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'A4'
}
</script>

<style lang="scss">

.a4 {
  max-width: 21cm;
  min-height: 29.7cm;
  padding: 2cm;
  border-radius: 5px;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  margin: 8mm auto;
  @media (max-width: $breakpoint-sm) {
    margin: 0 auto;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
  }
}
</style>

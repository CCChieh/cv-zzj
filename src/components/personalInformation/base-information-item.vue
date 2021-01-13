<template>
  <div class="row q-py-xs q-px-md items-center item">
   <div class="text-weight-bolder">{{ label }}：</div>{{ text }}
  </div>
</template>

<script>
export default {
  name: 'base-information-item',
  props: {
    label: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: solid 1px;
}
</style>

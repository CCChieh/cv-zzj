<template>
  <div class="row q-py-xs q-px-md items-center item">
    <a v-if="href" :href="href" target="_blank" class="row items-center">
      <q-icon class="q-pr-md" :name="icon" size="xs"/>
      {{ text }}</a>
    <div v-else class="row items-center">
      <q-icon class="q-pr-md" :name="icon" size="xs"/>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-way-item',
  props: {
    icon: String,
    text: String,
    href: String
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: dashed 1px;
}
</style>

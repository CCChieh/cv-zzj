<template>
  <q-drawer class="print-hide" content-class="bg-blue-grey-1"  show-if-above :value="left" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<script>
export default {
  name: 'LayoutDrawer',
  props: {
    left: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>

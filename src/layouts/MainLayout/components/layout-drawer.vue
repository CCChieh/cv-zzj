<template>
  <q-drawer
    class="print-hide"
    content-class="bg-blue-grey-1"
    :breakpoint="0"
    :value="$store.getters['app/leftDrawer']"
    :overlay="!$q.screen.gt.md"
    side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<script>
export default {
  name: 'LayoutDrawer'
}
</script>

<style scoped>

</style>

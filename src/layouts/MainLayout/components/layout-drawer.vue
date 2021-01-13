<template>
  <q-drawer
    class="print-hide"
    content-class="bg-blue-grey-1"
    :breakpoint="0"
    :value="$store.getters['app/leftDrawer']"
    :overlay="!$q.screen.gt.md"
    side="left" bordered>
    <div class="column q-pa-md">
      <q-btn unelevated @click="print()" color="blue-grey-8" label="打印简历">
        <q-tooltip>
          为了保证打印效果，请使用Chromium内核浏览器(Chrome)
        </q-tooltip>
      </q-btn>
    </div>
  </q-drawer>
</template>

<script>
export default {
  name: 'LayoutDrawer',
  methods: {
    print () {
      window.print()
    }
  }
}
</script>

<style scoped>

</style>

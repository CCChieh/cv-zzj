<template>
  <q-header elevated class="bg-primary text-white print-hide" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('update:left', !left)"/>

      <q-toolbar-title>
        <q-avatar>
          <img src="~assets/head.jpg" alt="头像">
        </q-avatar>
        郑智杰的简历
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One"/>
      <q-route-tab to="/page2" label="Page Two"/>
      <q-route-tab to="/page3" label="Page Three"/>
    </q-tabs>
  </q-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
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

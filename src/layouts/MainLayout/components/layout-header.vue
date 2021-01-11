<template>
  <q-header elevated class="header text-white print-hide" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('update:left', !left)"/>

      <q-toolbar-title>
        <q-avatar>
          <img src="~assets/head.jpg" alt="头像">
        </q-avatar>
        郑智杰的简历
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="center" inline-label>
      <q-tab name="zhihu" icon="fab fa-zhihu"/>
      <q-tab name="github" icon="fab fa-github"/>
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

<style lang="scss" scoped>
.header {
  background: linear-gradient(145deg, $blue-grey 11%, $blue-grey-8 75%);
}
</style>

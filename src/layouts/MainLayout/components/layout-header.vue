<template>
  <q-header elevated class="header text-white print-hide" height-hint="98">
    <q-toolbar class="row justify-between">
      <q-btn dense flat round icon="menu"
             class="col-auto"
             @click="$store.commit('app/SET_Left_Drawer', !$store.getters['app/leftDrawer'])"/>
      <q-toolbar-title class="col-auto">
        郑智杰的简历
        <q-avatar>
          <img src="~assets/head.png" alt="头像">
        </q-avatar>
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs class="a4-container" inline-label align="justify">
      <q-tab name="zhihu" icon="fab fa-zhihu"/>
      <q-tab name="github" icon="fab fa-github"/>
    </q-tabs>

  </q-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  beforeCreate () {
    if (this.$q.screen.gt.md) {
      // 如果是
      this.$store.commit('app/SET_Left_Drawer', true)
    } else {
      this.$store.commit('app/SET_Left_Drawer', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(145deg, $blue-grey 11%, $blue-grey-8 75%);
}
</style>

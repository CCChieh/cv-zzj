<template>
  <q-header elevated class="header text-white print-hide" height-hint="98">
    <q-toolbar class="row justify-between">
      <q-btn dense flat round
             :icon="$store.getters['app/leftDrawer']?'format_indent_decrease':'format_indent_increase'"
             class="col-auto"
             @click="$store.commit('app/SET_Left_Drawer', !$store.getters['app/leftDrawer'])"/>
      <q-toolbar-title class="col-auto">
        郑智杰
        <q-avatar>
          <img src="~assets/head.png" alt="头像">
        </q-avatar>
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs class="a4-container" inline-label align="justify" @input="jump">
      <q-tab name="zhihu" icon="fab fa-zhihu">
        <q-tooltip>
          {{ link.zhihu }}
        </q-tooltip>
      </q-tab>
      <q-tab name="github" icon="fab fa-github">
        <q-tooltip>
          {{ link.github }}
        </q-tooltip>
      </q-tab>
    </q-tabs>

  </q-header>
</template>

<script>
import { openURL } from 'quasar'
import link from 'src/infomation/link'

export default {
  name: 'LayoutHeader',
  data () {
    return {
      link
    }
  },
  beforeCreate () {
    if (this.$q.screen.gt.md) {
      // 如果是
      this.$store.commit('app/SET_Left_Drawer', true)
    } else {
      this.$store.commit('app/SET_Left_Drawer', false)
    }
  },
  methods: {
    jump (name) {
      openURL(link[name])
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(145deg, $blue-grey 11%, $blue-grey-8 75%);
}
</style>

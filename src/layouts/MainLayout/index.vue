<template>
  <q-layout view="hHh LpR lff" class="bg-blue-grey-3">
    <layout-header :left.sync="left"/>
    <layout-drawer :left="left"/>
    <q-page-container>
      <router-view/>
    </q-page-container>
    <layout-footer/>
  </q-layout>
</template>

<script>

import LayoutHeader from 'layouts/MainLayout/components/layout-header'
import LayoutDrawer from 'layouts/MainLayout/components/layout-drawer'
import LayoutFooter from 'layouts/MainLayout/components/layout-footer'

export default {
  name: 'MainLayout',
  components: {
    LayoutFooter,
    LayoutDrawer,
    LayoutHeader
  },
  data () {
    return {
      left: true
    }
  }
}
</script>

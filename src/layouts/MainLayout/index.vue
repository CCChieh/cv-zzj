<template>
  <q-layout view="hHh LpR lff" class="bg-teal-1">
    <q-header elevated class="bg-primary text-white print-hide" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

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

    <q-drawer class="print-hide" show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white print-hide">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      left: false
    }
  }
}
</script>

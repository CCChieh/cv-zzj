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
      <q-separator spaced="12px" color="blue-grey-8"></q-separator>
      <div class="q-gutter-y-md">
<!--        <div class="text-h5 text-weight-bold text-center">关于本页</div>-->
        <div class="row items-center">
          <div class="text-subtitle1 text-weight-bold">
            技术栈:
          </div>
          <div>
            <q-chip color="blue-grey-6" text-color="white">Vue</q-chip>
            <q-chip color="blue-grey-6" text-color="white">Quasar</q-chip>
          </div>
        </div>
        <div class="row items-center">
          <div class="text-subtitle1 text-weight-bold">
            项目地址:
          </div>
          <q-chip clickable color="blue-grey-9" text-color="white" icon="fab fa-github-alt"
                  @click="openURL('https://github.com/CCChieh/cv-zzj')">
            CCChieh/cv-zzj
          </q-chip>
        </div>
        <div></div>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDrawer',
  methods: {
    openURL,
    print () {
      window.print()
    }
  }
}
</script>

<style scoped>

</style>

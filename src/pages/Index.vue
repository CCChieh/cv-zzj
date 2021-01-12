<template>
  <q-page>
    <div class="a4">
      <a href="#cd">产品介绍</a>
      {{ $q.screen }}
      {{ $store.getters['global/showFloatLogin'] }}
      <router-link to="/#cd">
        cd
      </router-link>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </div>
    <div class="a4">
      <div id="cd">cd</div>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex'
}
</script>

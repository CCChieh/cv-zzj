<template>
  <q-page>
    <a4>
      <a href="#cd">产品介绍</a>
      {{$q.screen}}
      <router-link to="/#cd">
        cd
      </router-link>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </a4>
    <a4>
      <div id="cd">cd</div>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </a4>
  </q-page>
</template>

<script>

import A4 from 'components/A4'

export default {
  name: 'PageIndex',
  components: { A4 }
}
</script>

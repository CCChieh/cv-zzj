<template>
  <div class="column justify-center q-col-gutter-md">

    <div class="text-h3 text-weight-bold ">
      {{ personal.name }}
    </div>
    <div class="text-subtitle1 text-weight-bold row ">
      <div class="col-12 row items-center">
        <q-icon class="q-pr-md" name="fas fa-graduation-cap" size="xs"/>
        {{ personal.degree }}
      </div>
    </div>
    <div class="text-subtitle1 text-weight-bold row ">
      <div class="col-12 row items-center">
        <q-icon class="q-pr-md" name="fas fa-home" size="xs"/>
        <a :href="link.homePage" target="_blank">{{ link.homePage }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
import link from 'src/infomation/link'
export default {
  name: 'name-part',
  data () {
    return {
      personal: personal,
      link
    }
  }
}
</script>

<style scoped>

</style>

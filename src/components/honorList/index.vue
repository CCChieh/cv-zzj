<template>
  <base-box label="获奖经历">
    <div class="q-gutter-y-xs">
      <div class="row items-center" v-for="(honor, idx) in honorList" :key="idx">
        <q-icon class="q-pr-md" name="fas fa-medal"/>
        {{ honor }}
      </div>
    </div>
  </base-box>
</template>

<script>
import BaseBox from 'components/base/base-box'
import honorList from 'src/infomation/honor-list'

export default {
  name: 'honor-list',
  components: { BaseBox },
  data () {
    return {
      honorList: honorList
    }
  }
}
</script>

<style scoped>

</style>

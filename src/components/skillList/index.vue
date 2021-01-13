<template>
  <base-box label="专业技能">
    <div class="q-py-xs row items-center" v-for="(skill,idx) in skillList" :key="idx">
      <q-icon class="q-pr-md" :name="idx%2===1?'far fa-star':'fas fa-star'"/>{{ skill }}
    </div>
  </base-box>
</template>

<script>
import BaseBox from 'components/base/base-box'
import skillList from 'src/infomation/skill-list'

export default {
  name: 'skill-list',
  components: { BaseBox },
  data () {
    return {
      skillList: skillList
    }
  }
}
</script>

<style scoped>

</style>

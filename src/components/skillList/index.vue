<template>
  <base-box label="专业技能">
    <div class="q-gutter-y-xs">
      <div class="row center" v-for="(skill,idx) in skillList" :key="idx">
        <q-icon class="q-pr-md col-auto"  style="padding:4px 16px 4px 0"
                :name="idx%2===1?'far fa-star':'fas fa-star'"/>
        <div class="col self-center">{{ skill }}</div>
      </div>
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

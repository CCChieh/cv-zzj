<template>
  <base-box label="项目经历">
    <div class="q-gutter-y-md">
      <div class="" v-for="(project,idx) in projectList" :key="idx">
        <project-item class="" :project="project"/>
      </div>
    </div>
  </base-box>
</template>

<script>
import BaseBox from 'components/base/base-box'
import ProjectItem from 'components/projectList/project-item'
import projectList from 'src/infomation/project-list'

export default {
  name: 'project-list',
  components: {
    ProjectItem,
    BaseBox
  },
  data () {
    return {
      projectList: projectList
    }
  }
}
</script>

<style scoped>

</style>

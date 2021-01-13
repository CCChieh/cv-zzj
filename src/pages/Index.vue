<template>
  <q-page>
    <!--    page1-->
    <div class="a4 q-py-lg q-px-xl ">
      <div class="q-gutter-y-md">
        <personal-information></personal-information>
        <skill-list></skill-list>
        <project-list></project-list>
      </div>
    </div>
  </q-page>
</template>

<script>

import PersonalInformation from 'components/personalInformation'
import SkillList from 'components/skillList'
import ProjectList from 'components/projectList'

export default {
  name: 'PageIndex',
  components: {
    ProjectList,
    SkillList,
    PersonalInformation
  }
}
</script>

<template>
  <q-page>
    <!--    page1-->
    <div class="a4">
      <div>
        <personal-information></personal-information>
        <q-timeline>
          <q-timeline-entry
            color="blue-grey-8"
            icon="fas fa-wrench"
          >
            <skill-list></skill-list>
          </q-timeline-entry>
          <q-timeline-entry
            color="blue-grey-8"
            icon="fas fa-tasks"
          >
            <project-list></project-list>
          </q-timeline-entry>
          <q-timeline-entry
            color="blue-grey-8"
            icon="fas fa-award"
          >
            <honor-list></honor-list>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<script>

import PersonalInformation from 'components/personalInformation'
import SkillList from 'components/skillList'
import ProjectList from 'components/projectList'
import HonorList from 'components/honorList'

export default {
  name: 'PageIndex',
  components: {
    HonorList,
    ProjectList,
    SkillList,
    PersonalInformation
  }
}
</script>

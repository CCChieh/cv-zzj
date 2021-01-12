<template>
  <q-page>
    <!--    page1-->
    <div class="a4 q-py-lg q-px-xl">
      <personal-information></personal-information>
      {{$q.screen}}
    </div>
  </q-page>
</template>

<script>

import PersonalInformation from 'components/personalInformation'

export default {
  name: 'PageIndex',
  components: { PersonalInformation }
}
</script>

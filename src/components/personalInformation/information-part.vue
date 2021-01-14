<template>
  <div class="text-grey-8 column justify-center">
    <base-information-item
      label="年龄"
      :text="age(personal.birthday)"/>
    <base-information-item
      label="现居地"
      :text="personal.location"/>
    <base-information-item
      label="学校"
      :text="personal.school"/>
    <base-information-item
      label="手机"
      :text="personal.mobilePhone"/>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
import link from 'src/infomation/link'
import { date } from 'quasar'
import BaseInformationItem from 'components/personalInformation/base-information-item'

export default {
  name: 'information-part',
  components: { BaseInformationItem },
  data () {
    return {
      personal: personal,
      link
    }
  },
  methods: {
    age (birthday) {
      const now = new Date()
      const age = date.getDateDiff(now, birthday, 'years')
      return String(age)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="row justify-between">
    <!--    响应式只能这么些，如果直接使用quasar的类在打印机中输出会有问题-->
    <!--    名字-->
    <name-part :class="$q.screen.gt.sm?'col-3':'col-12 items-center'"/>
    <!--    基本信息-->
    <information-part :class="$q.screen.gt.sm?'col-4':'col-12 q-py-md'"/>
    <!--    联系方式-->
    <contact-part :class="$q.screen.gt.sm?'col-3':'col-12 q-py-md'"/>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
import link from 'src/infomation/link'
import { date } from 'quasar'
import NamePart from 'components/personalInformation/name-part'
import InformationPart from 'components/personalInformation/information-part'
import ContactPart from 'components/personalInformation/contact-part'

export default {
  name: 'PersonalInformation',
  components: {
    ContactPart,
    InformationPart,
    NamePart
  },
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

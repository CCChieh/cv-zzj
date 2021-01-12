<template>
  <div class="row justify-between">
    <div class="col-12 col-md-3 q-py-md q-py-md-none column justify-center items-center items-md-start q-col-gutter-md">

      <div class="text-h3 text-weight-bold ">
        {{ personal.name }}
      </div>
      <div class="text-subtitle1 text-weight-bold row ">
        <div class="col-12">
          <q-icon class="q-pr-md" name="fas fa-graduation-cap" size="xs"/>
          {{ personal.degree }}
        </div>
      </div>
      <div class="text-subtitle1 text-weight-bold row ">
        <div class="col-12">
          <q-icon class="q-pr-md" name="fas fa-home" size="xs"/>
          <a :href="link.homePage" target="_blank">{{ link.homePage }}</a>
        </div>
      </div>
    </div>
    <!--    基本信息-->
    <div class="col-12 col-sm-6 col-md-4 q-py-md q-py-md-none text-grey-8 column justify-center">
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
        label="学院"
        :text="personal.college"/>
    </div>
    <!--    联系方式-->
    <div class="col-12 col-sm-6  col-md-3 q-py-md q-py-md-none text-grey-8">
      <contact-way-item
        :text="personal.email"
        :href="'mailto:'+personal.email"
        icon="far fa-envelope"/>
      <contact-way-item
        :text="personal.wechat"
        icon="fab fa-weixin"/>
      <contact-way-item
        :href="link.github"
        :text="personal.github"
        icon="fab fa-github"/>
      <contact-way-item
        :href="link.zhihu"
        :text="personal.zhihu"
        icon="fab fa-zhihu"/>
    </div>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
import link from 'src/infomation/link'
import ContactWayItem from 'components/contact-way-item'
import BaseInformationItem from 'components/base-information-item'
import { date } from 'quasar'

export default {
  name: 'PersonalInformation',
  components: {
    BaseInformationItem,
    ContactWayItem
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

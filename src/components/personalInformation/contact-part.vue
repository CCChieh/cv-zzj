<template>
  <div class="text-grey-8">
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
</template>

<script>
import personal from 'src/infomation/personal'
import link from 'src/infomation/link'
import ContactWayItem from 'components/personalInformation/contact-way-item'
export default {
  name: 'contact-part',
  components: { ContactWayItem },
  data () {
    return {
      personal: personal,
      link
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="">
    <q-card flat bordered class="q-py-sm q-px-md">
      <div class="q-gutter-y-xs">
        <div class="row">
          <div class="text-weight-bold text-subtitle2 col-auto">项目名称：</div>
          <div class="col">{{ project.name }}</div>
        </div>

        <div v-if="project.demo" class="row">
          <div class="text-weight-bold text-subtitle2 col-auto">项目演示：</div>
          <a class="col" :href="project.demo">{{ project.demo }}</a>
        </div>

        <div v-if="project.detail" class="row">
          <div class="text-weight-bold text-subtitle2 col-auto">项目介绍：</div>
          <div class="col">{{ project.detail }}</div>
        </div>

        <div v-if="project.technology" class="row">
          <div class="text-weight-bold text-subtitle2 col-auto">相关技术：</div>
          <div class="col">
            <div v-for="(tech,idx) in project.technology" :key="idx">{{idx+1}}. {{ tech }}</div>
          </div>
        </div>

        <div class="row">
          <div class="text-weight-bold text-subtitle2 col-auto">主要职责：</div>
          <div class="col">
            <div v-for="(duty,idx) in project.duty" :key="idx"><q-icon class="q-pr-md" name="fas fa-star"/>{{ duty }}</div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'project-item',
  props: {
    project: Object
  }
}
</script>

<style scoped>

</style>

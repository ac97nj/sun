<template>
  <layout>
    <label-tag/>
    <label-statistics/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Provide} from 'vue-property-decorator';
import LabelTag from '@/components/label/labelTag.vue';
import LabelStatistics from '@/components/label/labelStatistics.vue';



@Component({
  components: {LabelStatistics, LabelTag}
})
export default class Labels extends Vue {
  @Provide() eventBus = new Vue;


}
</script>

<style lang="scss" scoped>


</style>
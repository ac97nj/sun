<template>
  <layout>
    <label-tag></label-tag>
    <label-statistics></label-statistics>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTag from '@/components/label/labelTag.vue';
import LabelStatistics from '@/components/label/labelStatistics.vue';
@Component({
  components: {LabelStatistics, LabelTag}
})
export default class Labels extends Vue {

}


</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="label">
    <ul class="label-tag">
      <li :class="type ==='-'&& 'selected' ">
        收入
      </li>
      <li class="tag-disburse">
        支出
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelTag extends Vue {

  type = '-'


}


</script>

<style lang="scss" scoped>



</style>
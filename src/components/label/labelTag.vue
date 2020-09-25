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
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  .label-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    text-align: center;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      //text-align: center;
      margin-left: 20px;
      width: 90px;
      height: 30px;
      &.selected {
        background: #F5E4A2;
      }
    }

  }


}


</style>
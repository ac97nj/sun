<template>
  <div class="type">
    <div class="calendar">日历</div>
    <ul class="isType">
      <li :class="type ==='-'&& 'selected' " @click="selectType('-')">支出</li>
      <li :class="type ==='+'&& 'selected' " @click="selectType('+')">收入</li>
    </ul>
    <div class="redact">删除</div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class Type extends Vue {
  type = '-';
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw  new Error('type');
    }
    console.log('x');
    this.type = type;
  }
}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.type {
  display: flex;
  background: #F0F1F2;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;

  > .isType {
    display: flex;

    > li {

      position: relative;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      &.selected::after {
        margin-top: 12px;
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        background: #FF931D;
      }
    }
  }

  .calendar {
    margin-left: 10px;

  }

  .redact {
    margin-right: 10px;
  }
}
</style>
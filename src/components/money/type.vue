<template>
  <div class="type">
    <Icon name="twosun"></Icon>
    <ul class="isType">
      <li :class="type ==='-'&& 'selected' " @click="selectType('-')">支出</li>
      <li :class="type ==='+'&& 'selected' " @click="selectType('+')">收入</li>
    </ul>
    <div class="redact" @click="upDataIcon" v-if="!removeIcon">删除</div>
    <div class="redact" @click="upDataIcon" v-else>完成</div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Inject, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  @Prop(Number) readonly propA: number | undefined;
  @Prop(String) value!: string;
  @Inject() eventBus!: Vue;

  removeIcon = false;
  type = '-';


  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw  new Error('type');
    }
    this.type = type;
    this.$emit('update:type', this.type);
    this.eventBus.$emit('update:type', this.type);
  }


  upDataIcon() {
    this.removeIcon = !this.removeIcon;
    this.eventBus.$emit('update:removeIcon', this.removeIcon);
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

  .icon {
    font-size: 18px;
    width: 50px;
    height: 35px;
    color: #FF931D;
    margin-left: 10px;
    position: relative;

  }


  > .isType {
    display: flex;

    flex-grow: 1;
    justify-content: center;
    align-items: center;

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
    margin-right: 10px;
    display: flex;
    height: 40px;
    width: 45px;
    justify-content: center;
    align-items: center;

  }

  .redact {
    display: flex;
    margin-right: 10px;
    height: 40px;
    width: 45px;
    justify-content: center;
    align-items: center;
  }
}


</style>
<template>
  <div class="label">
    <ul class="label-tag">
      <li :class="type ==='-'&& 'selected'" @click="selectType('-')">
        支出
      </li>
      <li class="tag-disburse" :class="type ==='+'&& 'selected'" @click="selectType('+')">
        收入
      </li>
    </ul>
    <div v-if="!removeRecordDate" @click="removeRecord">
      删除
    </div>
    <div v-else @click="removeRecord">
      完成
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Inject} from 'vue-property-decorator';

@Component
export default class LabelTag extends Vue {

  @Inject() eventBus!: Vue;

  type = '-';

  removeRecordDate = false;


  removeRecord() {
    this.removeRecordDate = !this.removeRecordDate;
    this.eventBus.$emit('removeremoveRecord', this.removeRecordDate);
    return   this.removeRecordDate

  }





  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw  new Error('type');
    }
    this.type = value;
    this.eventBus.$emit('update:type', this.type);
  }


}


</script>

<style lang="scss" scoped>
.label {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;

  .label-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    text-align: center;
    flex-grow: 1;

    > li {
      margin-left: 15px;
      width: 80px;

      &.selected {
        background: #F5E4A2;
      }
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}


</style>
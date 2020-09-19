<template>
  <ul class="tags">
    <li class="tag-one" v-for="icon in  icons" :key="icon.index">
      <div class="tag-icon">
        <Icon :name="icon.name"></Icon>
      </div>
      <div class="tag-text">
        {{ icon.text }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class Tags extends Vue {

  icons = [
    {type: '-', name: 'zaocan', text: '早餐'},
    {type: '-', name: 'zhusu', text: '住宿'},
    {type: '-', name: 'yifu', text: '衣服'},
    {type: '+', name: 'gongzi', text: '鞋子'},
    {type: '-', name: 'zaocan', text: '早餐'},
    {type: '-', name: 'zhusu', text: '住宿'},
    {type: '-', name: 'yifu', text: '衣服'},
    {type: '+', name: 'gongzi', text: '鞋子'},
    {type: '-', name: 'zaocan', text: '早餐'},
    {type: '-', name: 'zhusu', text: '住宿'},
    {type: '-', name: 'yifu', text: '衣服'},
    {type: '+', name: 'gongzi', text: '鞋子'},
    {type: '-', name: 'zaocan', text: '早餐'},
    {type: '-', name: 'zhusu', text: '住宿'},
    {type: '-', name: 'yifu', text: '衣服'},
    {type: '+', name: 'gongzi', text: '鞋子'},
    {type: '-', name: 'zaocan', text: '早餐'},
    {type: '-', name: 'zhusu', text: '住宿'},
    {type: '-', name: 'yifu', text: '衣服'},
    {type: '+', name: 'gongzi', text: '鞋子'},

  ];


}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  margin: auto;
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  padding: 10px;
  height: 47%;
  overflow: auto;

  > li {
    display: flex;
    flex-direction: column;
    width: 22%;
    margin-left: 2%;
    margin-top: 3%;
    align-items: center;

    > .tag-icon {
      background: #F0F1F2;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;

      > .icon {
        font-size: 30px;
      }
    }
  }
}
</style>
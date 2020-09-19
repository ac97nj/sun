<template>
  <ul class="tags">
    <li class="tag-one"
        v-for="(icon,index) in dataIcon"
        :key="index"
        @click="control(icon)"
    >
      <div class="tag-icon"  :class="{ selected: tagData.indexOf(icon)>=0 && 'selected' }">
        <Icon :name="icon.name"></Icon>
      </div>
      <div class="tag-text">
        {{ icon.text }}
      </div>
    </li>
    <li class="tag-one" @click="addTags">

      <div class="tag-icon">
        <Icon name="zengjia"></Icon>
      </div>
      <div class="tag-text">
        增加
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type icondata = [{ name: string; text: string; type: string }]
@Component
export default class Tag extends Vue {
  @Prop(Array) dataIcon: icondata | undefined;
  tagData: icondata = [{name: '', text: '', type: ''}];


  control(value: { name: string; text: string; type: string }) {

    //没有理解?????????
    const index = this.tagData.indexOf(value);
    if (this.tagData.indexOf(value) >= 0) {
      this.tagData.splice(index, 1);
    } else {
      this.tagData.push(value);
      //  记住这里面已经有一个为 1 的数字了
      console.log(this.tagData);
    }
  }

  addTags() {
    this.$router.push('/AddTag')
  }


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
  height: 54%;
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
      &.selected {
        background: #FF931D;
      }

      > .icon {
        font-size: 30px;
      }
    }
  }
}
</style>
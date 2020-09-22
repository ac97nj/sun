<template>
  <div class="tags">
    <ul class="tags-ul">
      <li class="tag-one"
          v-for="(icon,index) in IconData"
          :key="index"
          @click="controls(icon)"
      >
        <div class="tag-icon" :class="{ selected: tagDateText ===  icon.text && 'selected' }">
          <Icon :name="icon.name"></Icon>
          <Icon
              name="shanchu"
              class="deleteIcon"
              v-if="removeIcon"
          ></Icon>
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


  </div>

</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Inject, Prop, Watch} from 'vue-property-decorator';
import AddTag from '@/components/addtag.vue';


type icondate = [{ name: string; text: string; type: string }]
@Component({
  components: {AddTag}
})
export default class Tag extends Vue {

  @Prop(Array) dataIcon: icondate | undefined;
  @Inject() eventBus!: Vue;

  get IconData() {     //计算属性
    return this.dataIcon;
  }

  removeIcon = false;

  tagDataName: string[] = [];   // 储存 svg 的 name
  tagDateText = '';            //  储存 svg 的 text

  controls(value: { name: string; text: string; type: string }) {
    this.tagDataName.push(value.name);
    this.tagDateText = value.text;
    if (this.tagDataName.length === 1) {
      return;
    } else {
      const CC = this.tagDataName.indexOf(value.name);
      this.tagDataName.splice(CC - 1, 1);
      console.log(this.tagDataName);
    }
  }


  @Watch('tagDataName')
  onNameChanged(value: string[]) {
    this.$emit('update:Tag', value[0]);
  }

  @Watch('tagDateText')
  onTextChanged(value: string) {
    this.$emit('update:text', value);
  }


  addTags() {
    console.log(this);
    this.$router.push('/AddTag');
  }



  mounted() {
    this.eventBus.$on('update:removeIcon', (removeIcon: boolean) => {
      return this.removeIcon = removeIcon
    });
  }


}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


.tags {
  flex-direction: column;
  width: 90%;
  margin: auto;

  .tags-ul {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    height: 400px;

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
        position: relative;


        &.selected {
          background: #FF931D;
        }

        > .deleteIcon {
          position: absolute;
          left: 43px;
          bottom: 36px;
        }


        > .icon {
          font-size: 30px;
        }
      }
    }
  }

  .addTag {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: white;
    z-index: 2;
  }
}


</style>
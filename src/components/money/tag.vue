<template>
  <div class="tags">
    <ul class="tags-ul">
      <li class="tag-one"
          v-for="(icon,index) in dataIcon"
          :key="index"
          @click="controls(icon)">
        <div class="tag-icon" :class="{ selected: tagDateText ===  icon.text && 'selected' }">
          <Icon :name="icon.name"></Icon>
          <div class="deleteIcon" @click="delteIccon(icon.text)">
            <Icon name="shanchu" v-if="removeIcon"/>
          </div>
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
import {Component, Inject, Watch} from 'vue-property-decorator';
import AddTag from '@/components/addtag.vue';


@Component({
  components: {AddTag}
})
export default class Tag extends Vue {

  @Inject() eventBus!: Vue;

  type = '-';
  dataIcon: RecordItem[] = [];

  get tagIcon() {
    return this.$store.state.tagIcon;
  }


  created() {
    this.$store.commit('getSave');
    if (this.tagIcon.length === 0) {
      this.$store.commit('fetchTags');
      this.$store.commit('getSave');
      console.log(this.tagIcon);
    }
    if (this.type === '-') {
      this.dataIcon = this.tagIcon.filter((i: { type: string }) => i.type === '-');
    }
  }

  mounted() {
    this.eventBus.$on('update:removeIcon', (removeIcon: boolean) => {
      return this.removeIcon = removeIcon;
    });
    this.eventBus.$on('update:type', (value: string) => {
      this.type = value;
      this.$store.commit('getSave');
      this.dataIcon = this.tagIcon.filter((item: { type: string }) => item.type === value);
    });
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
    this.$router.push('/AddTag');
  }


  delteIccon(value: string) {
    this.$store.commit('removeTag', value);
    console.log(this.type);
    if (this.type === '-') {
      this.$store.commit('getSave');
      this.dataIcon = this.tagIcon.filter((i: { type: string }) => i.type === '-');
    }
    if (this.type === '+') {
      this.dataIcon = this.tagIcon.filter((i: { type: string }) => i.type === '+');
    }
  }
}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


.tags {
  flex-direction: column;
  width: 90%;
  margin: auto;
  overflow: auto;
  height: 360px;

  .tags-ul {
    display: flex;
    flex-wrap: wrap;

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

        > .deleteIcon {
          position: absolute;
          left: 40px;
          bottom: 30px;

          > .icon {
            font-size: 25px;
            color: red;
          }
        }

        &.selected {
          background: #FF931D;
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
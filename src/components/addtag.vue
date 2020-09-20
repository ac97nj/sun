<template>
  <div>
    <nav class="add-nav">
      <router-link to="/Money" class="add-back ">
        <Icon name="fanhui"></Icon>
      </router-link>
      <ul class="add-isType">
        <li :class="type ==='-'&& 'selected' " @click="selectType('-')">
          支出
        </li>
        <li :class="type ==='+'&& 'selected' " @click="selectType('+')">
          收入
        </li>
      </ul>
      <router-link to="" class="add-sort">
        <Icon name="wancheng"></Icon>
      </router-link>

    </nav>

    <div class="add-one">
      <div class="add-tag" :class="{selected : addTag.length ===1 && 'selected'}">
        <Icon :name=" addTag[0]"></Icon>
      </div>
      <label class="add-input">
        <input placeholder="请最多输入 4 个字"/>
      </label>
      <hr class="hr"/>
    </div>

    <ul class="add-label">
      <li v-for="(item,index) in addlabels" :key="index"
          @click="control(item)"
      >

        <div class="add-icon" :class="{ selected : addData.indexOf(item)>=0 && 'selected' }">
          <Icon :name="item.name"></Icon>
        </div>


      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

type icondata = [{ name: string }]


@Component
export default class AddTag extends Vue {
  type = '-';
  addData: icondata = [{name: ''}];
  addTag: string[] = [];

  addlabels = [
    {name: 'dangao'},
    {name: 'fangsong'},
    {name: 'jingbi'},
    {name: 'kouhong'},
    {name: 'xiuxain'},
    {name: 'yundong'},
    {name: 'pingguo'},
  ];


  created() {
    return this.control({name: 'dangao'});
  }

  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw  new Error('type');
    }
    console.log(value);
    this.type = value;
  }

  control(item: { name: string }) {
    this.addData.push(item);
    this.addTag.push(item.name);

    if (this.addData.length > 2) {
      const CC = this.addData.indexOf(item);
      this.addData.splice(CC - 1, 1);
    } else {
      console.log('没有删除上一个');
    }


    if (this.addTag.length === 1) {
      return this.addTag;
    } else {
      const DD = this.addTag.indexOf(item.name);
      this.addTag.splice(DD - 1, 1);
      return this.addTag;
    }
  }
}


</script>

<style lang="scss" scoped>

.add-nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .add-isType {

    display: flex;
    width: 40%;


    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 30px;

      &.selected {
        background: #F5E4A2;
      }
    }
  }


  > .add-back {
    margin-left: 30px;

    > .icon {
      font-size: 20px;
    }
  }

  > .add-sort {
    font-size: 20px;
    margin-right: 30px;
  }
}

.add-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .add-tag {
    margin-top: 10px;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F0F1F2;
    border-radius: 50%;

    &.selected {
      background: #FF931D;
    }

    > .icon {
      font-size: 30px;
    }

  }


  .add-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > input {
      border: none;
      height: 50px;
      padding-left: 15px;
      margin-bottom: 10px;
    }
  }

  .hr {
    width: 60%;
    margin: auto;
  }
}

.add-label {
  margin: auto;
  display: flex;
  width: 65%;
  padding-top: 10px;
  flex-wrap: wrap;

  > li {
    margin-left: 10px;
    margin-top: 15px;
    width: 20%;


    > .add-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #F0F1F2;
      width: 55px;
      height: 55px;
      border-radius: 50%;

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
<template>
  <div>
    <nav class="add-nav">

      <router-link to="/Money" class="add-back ">
        <Icon name="fanhui"></Icon>
      </router-link>

      <div>添加支出类别</div>

      <router-link to="/Money" class="add-sort">
        <Icon name="wancheng"></Icon>
      </router-link>

    </nav>

    <div class="add-one">
      <label class="add-input">
        <span>类别</span>
        <input placeholder="请最多输入 4 个字"/>
      </label>
      <hr class="hr"/>
    </div>

    <ul class="add-label">
      <li v-for="(item,index) in addlabels" :key="index">
        <div class="add-icon">
          <Icon :name="item.name"></Icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class AddTag extends Vue {

  addlabels = [
    {name: 'dangao'},
    {name: 'fangsong'},
    {name: 'jingbi'},
    {name: 'kouhong'},
    {name: 'xiuxain'},
    {name: 'yundong'},
    {name: 'pingguo'},
  ];


}


</script>

<style lang="scss" scoped>

.add-nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

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
  .add-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > span {
      margin: 20px;
    }

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

      > .icon {
        font-size: 30px;
      }
    }
  }
}

</style>
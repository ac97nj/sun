<template>
  <Layout>
    <div class="type">
      <div class="calendar">日历</div>
      <ul class="isType">
        <li class="selected">收入</li>
        <li>支出</li>
      </ul>
      <div class="redact">删除</div>
    </div>

    <ul class="tag">
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>
      <li class="tag-one">
        <div class="tag-icon">
          <Icon name="zaocan"></Icon>
        </div>
        <div class="tag-text">
          早餐
        </div>
      </li>


    </ul>

    <div class="wrapper-one">
      <label class="notes">
        <span class="notes-name">备注</span>
        <input placeholder="点击写备注"/>
      </label>
      <div class="number-wrapper">
        <div class="number-show">100</div>
        <div class="number-key ">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">完成</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </div>


  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Money extends Vue {

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
      margin-left: 10px;
      position: relative;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

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


.notes {
  margin-top: 5px;
  display: flex;
  background: #F5F5F5;
  font-size: 14px;
  align-items: center;

  .notes-name {
    margin-right: 12px;
    padding-left: 10px;
  }

  > input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 5px;
  }


}

.number-wrapper {
  .number-show {
    font-size: 30px;
    font-family: Consolas, monospace;
    text-align: right;
  }

  .number-key {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 40px;
      float: left;
      background: #393F4E;
      color: #F8FEFF;
      border: 1px solid #26292C;

      &.ok {
        height: 40 *2px;
        float: right;
        background: #FF931D;
        color: #26292C;
      }

      &.zero {
        width: 25*2%;
      }
    }


  }


}

.tag {
  margin: auto;
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  padding: 10px;
  height: 50%;
  overflow: auto;
  border: 1px solid;
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

.wrapper-one {
  position: absolute;
  bottom: 0;
  width: 100%;
  >



}

</style>
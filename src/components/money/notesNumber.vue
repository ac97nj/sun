<template>
  <div class="notes-number">
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
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NotesNumber extends Vue {


}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.notes-number {
  position: absolute;
  bottom: 0;
  width: 100%;


  > .notes {
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

  > .number-wrapper {
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

}
</style>
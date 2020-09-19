<template>
  <div class="notes-number">

    <label class="notes">
      <span class="notes-name">备注</span>
      <input placeholder="点击写备注"
             v-model="inputValue"
      />
    </label>
    <div class="number-wrapper">
      <div class="number-show">{{ output }}</div>
      <div class="number-key ">
        <button @click="buttonText">1</button>
        <button @click="buttonText">2</button>
        <button @click="buttonText">3</button>
        <button @click="remove">删除</button>
        <button @click="buttonText">4</button>
        <button @click="buttonText">5</button>
        <button @click="buttonText">6</button>
        <button @click="empty">清空</button>
        <button @click="buttonText">7</button>
        <button @click="buttonText">8</button>
        <button @click="buttonText">9</button>
        <button class="ok" @click="ok">完成</button>
        <button class="zero" @click="buttonText">0</button>
        <button @click="buttonText">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NotesNumber extends Vue {
  output = '0';

  inputValue = '';

  buttonText(event: MouseEvent) {
    const events = event.target as HTMLButtonElement;
    const textInput = events.textContent as string;
    if (this.output === '0') {
      if ('0123456789'.indexOf(textInput) >= 0) {
        this.output = textInput;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0) {
      if (textInput === '.') {
        return;
      }
    }
    this.output = this.output + events.textContent;
  }

  remove() {
    if (this.output.length !== 1) {
      this.output = this.output.slice(0, -1);
    } else {
      this.output = '0';
    }
  }

  empty() {
    this.output = '0';
  }

  ok() {
    console.log('ok');
  }

  onInputText(event: KeyboardEvent) {
    const eventText = event.target as HTMLInputElement;
    this.inputValue = eventText.value;
  }

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
      height: 45px;
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
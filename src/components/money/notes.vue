<template>
  <div class="notes-Include">
    <label class="notes">
      <span class="notes-name">备注</span>
      <input placeholder="点击写备注"
             v-model="inputValue"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  inputValue = '';

  @Watch('inputValue')
  onInputChanged(value: string) {
    this.$emit('update:Notes', value);
  }

}


</script>

<style lang="scss" scoped>

.notes-Include {
  position: absolute;
  bottom: 30%;
  width: 100%;

  .notes {
    margin-top: 5px;
    display: flex;
    background:#F5F5F5;
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

}


</style>
<template>
  <div class="Layout-wrapper">
    <div class="container">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Layout extends Vue{

}

</script>

<style lang="scss"  scoped>
.Layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > .container {
    flex-grow: 1;
    overflow: auto;
    height: 100%;
    position: relative;
  }
}
</style>
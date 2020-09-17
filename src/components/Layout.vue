<template>
  <div class="nav-wrapper">
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
.nav-wrapper {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .container {
    border: 1px solid blue;
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
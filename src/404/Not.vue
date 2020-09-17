<template>
  <div>
    当前页面不存在,请返回首页
    <router-link to="/Money">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Not extends Vue {

}


</script>

<style lang="scss" scoped>

</style>
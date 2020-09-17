<template>
  <div>
    <router-link to="/Money">明细</router-link>
    |
    <router-link to="/Labels">记账</router-link>
    |
    <router-link to="/Statistics">统计</router-link>
  </div>
</template>

<script lang="ts">

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}



import sun from '../assets/icons/sun.svg'
console.log(sun)

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {

}


</script>

<style lang="scss" scoped>

</style>
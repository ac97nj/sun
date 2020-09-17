<template>
  <div>
    <Icon name="label"/>
    <router-link to="/Money">明细</router-link>
    |
    <Icon name="tally"/>
    <router-link to="/Labels">记账</router-link>
    |
    <Icon name="sta"/>
    <router-link to="/Statistics">统计</router-link>
  </div>
</template>

<script lang="ts">







import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {

}


</script>

<style lang="scss" scoped>

</style>
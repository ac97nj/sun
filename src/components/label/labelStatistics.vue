<template>
  <div>
    <ul class="Statistics">
      <li>
        <div class="Statistics-one">
          <div>9月25日</div>
          <div>
            总计 :<SPAN>100</SPAN>
          </div>
        </div>
        <div class="Statistics-two">
          <div>
            <Icon name="xiezi"/>
            <span>鞋子</span>
          </div>
          <div>
            100
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelStatistics extends Vue {

}


</script>

<style lang="scss" scoped>



</style>
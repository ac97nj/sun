<template>
  <layout>
    <div class="label">
      <ul class="label-tag">
        <li :class="type ==='-'&& 'selected'">
          收入
        </li>
        <li class="tag-disburse" :class="type ==='+'&& 'selected'">
          支出
        </li>
      </ul>
    </div>
    <div>
      <ol class="Statistics">
        <li >
        </li>
      </ol>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTag from '@/components/label/labelTag.vue';
import LabelStatistics from '@/components/label/labelStatistics.vue';

@Component({
  components: {LabelStatistics, LabelTag}
})
export default class Labels extends Vue {
  type = '-';

  beforeCreate() {
    this.$store.commit('read');
  }
    // get recordData() {
      //   const AA = (this.$store.state as rootState).recordData;
      //
      //   for (let i = 0; i < AA.length; i++) {
      //    const  dat = AA[i].createAt!.split('T')
      //     console.log(AA);
      //
      //   }
      //
      //
      //   return [];
      // }
  // }

  //


}
</script>

<style lang="scss" scoped>

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  .label-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    text-align: center;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      //text-align: center;
      margin-left: 20px;
      width: 90px;
      height: 30px;

      &.selected {
        background: #F5E4A2;
      }
    }
  }
}


</style>
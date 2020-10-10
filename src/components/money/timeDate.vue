<template>
  <div class="date-one">
    <label class="date-two">
      日期:<input type="date"
                :value="X(this.datevalue)"
                @input="datevalue = $event.target.value "
    >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import dayjs from 'dayjs';


@Component
export default class TimeDate extends Vue {
  datevalue = new Date().toISOString();


  X(AAA: string) {
    return dayjs(AAA).format('YYYY-MM-DD');
  }


  @Watch('datevalue')
  onInputChanged(value: string) {      //传送备注的内容
    this.$emit('update:datevalue', value);
    console.log(value);
  }


}


</script>

<style lang="scss" scoped>

.date-one {

  width: 80%;
  margin: auto;

  > .date-two {
    border: 1px solid #E1E1E1;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;


    > input {
      border: none;
      margin-left: 5px;
      color: #E97373;
      font-weight: bold;
      -webkit-appearance:none;
      background: none;
      outline: none;
    }
  }

}


</style>
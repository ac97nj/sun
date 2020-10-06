<template>
  <Layout>

    <div class="label">
      <ul class="label-tag">
        <li :class="type ==='-'&& 'selected'" @click="selectType('-')">
          支出
        </li>
        <li class="tag-disburse" :class="type ==='+'&& 'selected'" @click="selectType('+')">
          收入
        </li>
      </ul>
      <Icon name="twosun"></Icon>
    </div>
    <div class="chart-one" ref="chartWrapper">
      <Chart :options="chartOptions" class="chart"></Chart>
    </div>

    <div class="sum">
      <div>
        <div> 30 天总和:</div>
        <div class="sum-one">{{ AAA }}</div>
      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import clone from '@/lib/clone';
import dayjs from 'dayjs';
import Chart from '@/components/statistics/chart.vue';
import _ from 'lodash';
import day from 'dayjs';


@Component({
  components: {Chart}
})
export default class Statistics extends Vue {

  type = '-';


  beforeCreate() {
    this.$store.commit('read');
  }


  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw  new Error('type');
    }
    this.type = value;
  }

  get recordData() {
    return (this.$store.state as rootState).recordData;
  }

  get recordList() {
    const recordList = this.recordData;
    const nweList = clone(recordList)
        .filter(item => item.type === this.type)
        .sort((a, b) =>
            dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
        );
    if (nweList.length === 0) {return [] as RecordItem[];}
    type hashValue = {
      title: string;
      total?: number;
      items: RecordItem[];
    }
    const hashRecord: hashValue[] = [
      {title: dayjs(nweList[0].createAt).format('YYYY-MM-DD'), items: [nweList[0]], total: nweList[0].amount}
    ];

    for (let i = 1; i < recordList.length; i++) {
      const head = nweList[i];
      const last = hashRecord[hashRecord.length - 1];
      if (head) {
        if (dayjs(last.title).isSame(dayjs(head.createAt), 'day')) {
          last.items.push(nweList[i]);
        } else {
          hashRecord.push({title: dayjs(nweList[i].createAt).format('YYYY-MM-DD'), items: [nweList[i]]});
        }
      }
      hashRecord.map((group) => {group.total = group.items.reduce((sum, item) => sum + item.amount!, 0);});
    }
    return hashRecord;
  }


  get keyValueList() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today)
          .subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.recordList as hashValue[], {
        title: dateString
      });
      console.log(found);
      array.push({
        key: dateString, value: found ? found.total : 0,
      });


    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    console.log(array);

    return array;
  }


  get AAA() {

    let sum = 0;
    const BB = [];
    for (let i = 0; i <= 29; i++) {
      BB.push(this.keyValueList[i].value);
    }

    BB.forEach(function (val, index, BB) {
      sum += val!;
    });

    return sum;
  }


  get chartOptions() {
    const keys = this.keyValueList.map(item => item.key);
    const values = this.keyValueList.map(item => item.value);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {alignWithLabel: true},
        axisLine: {lineStyle: {color: '#666'}},
        axisLabel: {
          formatter: function (value: string, index: number) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
          normal: {
            color: 'red',//折线的颜色
            width: '0.8'//折线粗细
          }
        },
        itemStyle: {borderWidth: 1, color: '#666', borderColor: '#666'},
        data: values,
        type: 'line'
      }],
      tooltip: {
        show: true, triggerOn: 'click',
        position: 'top',
        formatter: '金额:{c}'
      }
    };
  }


}


</script>

<style lang="scss" scoped>
.echarts {
  max-width: 100%;
  height: 400px;
}

.label {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 15px;
    width: 50px;
    height: 35px;
    color: #FF931D;
    position: relative;
  }


  .label-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    text-align: center;
    flex-grow: 1;

    > li {
      margin-left: 15px;
      width: 80px;

      &.selected {
        background: #F5E4A2;
      }
    }
  }
}


.chart-one {
  //height: 400px;
  overflow: auto;

  > .chart {
    width: 420%;
  }
}

.sum {

  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;


  > div {
    display: flex;
    border: 1px solid #E1E1E1;
    padding: 5px;
    width: 50%;
    border-radius: 5px;

    >div{
      margin-left: 15px;
    }
  }
}

.sum-one{
  color: #E97373;
}
</style>
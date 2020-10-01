<template>
  <layout>
    <div class="label">
      <ul class="label-tag">
        <li :class="type ==='-'&& 'selected'" @click="selectType('-')">
          支出
        </li>
        <li class="tag-disburse" :class="type ==='+'&& 'selected'" @click="selectType('+')">
          收入
        </li>
      </ul>
      <div>
        删除
      </div>
    </div>
    <div class="AAA">
      <ol class="Statistics">
        <li v-for="(item,index) in recordList" :key="index">
          <div class="Statistics-item">
            <span> {{ beauty(item.title) }}</span>
            <span>支出:{{ item.total }}</span>
          </div>
          <ol class="Statistics-ol">
            <li v-for="group in item.items" :key="group.id" class="Statistics-group">
              <div class="Statistics-name">
                <Icon :name="group.name"></Icon>
              </div>
              <div class="Statistics-amount">
                <div>
                  {{ group.notes }}
                </div>
                <div>
                  ￥{{ group.amount }}
                </div>
              </div>
            </li>
          </ol>
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
import dayjs from 'dayjs';
import clone from '@/lib/clone';


@Component({
  components: {LabelStatistics, LabelTag}
})
export default class Labels extends Vue {
  type = '-';

  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw  new Error('type');
    }
    this.type = value;
  }


  beforeCreate() {
    this.$store.commit('read');
  }


  get recordData() {
    return (this.$store.state as rootState).recordData;
  }


  get recordList() {
    const recordList = this.recordData;
    // 获取新的 List 并对时间进行排序
    const nweList = clone(recordList)
        .filter(item => item.type === this.type)
        .sort((a, b) =>
            dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
        );
    type hashValue = {
      title: string;
      total?: number;
      items: RecordItem[];
    }
    const hashRecord: hashValue[] = [
      {title: dayjs(nweList[0].createAt).format('YYYY-MM-DD'), items: [nweList[0]]}
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
    console.log(hashRecord);

    return hashRecord;
  }


  beauty(value: string) {
    if (dayjs(value).isSame(dayjs(), 'year')) {
      return dayjs(value).format('M月 DD日');
    } else {
      return dayjs(value).format('YYYY 年MM月 DD日');
    }
  }


}
</script>

<style lang="scss" scoped>

.label {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border: 1px solid;

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


  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}




.Statistics {
  background: #ffffff;


  .Statistics-item {
    display: flex;
    color: #999;
    border-bottom: 1px solid #E1E1E1;
    justify-content: space-between;

    > span:first-child {
      margin: 10px;

    }

    > span:last-child {
      margin: 10px;
    }
  }

  .Statistics-group {
    display: flex;
    justify-content: left;
    align-items: center;

    .Statistics-name {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px;
      background: #F0F1F2;

      > .icon {
        font-size: 30px;
      }

    }

    .Statistics-amount {
      border-bottom: 1px solid;
      flex-grow: 1;
      display: flex;

      > div:first-child {
        flex-grow: 1;
        margin: 5px;
      }

      > div:last-child {
        margin-right: 10px;
      }
    }
  }
}


</style>
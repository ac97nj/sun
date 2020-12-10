<template>
  <div class="LabelsOne">
    <ol class="Labels" v-if="recordList.length >0 ">
      <li v-for="(item,index) in recordList" :key="index">
        <div class="Labels-item">
          <span> {{ beauty(item.title) }}</span>
          <span>总计:{{ item.total }}</span>
        </div>
        <ol class="Labels-ol">
          <li v-for="group in item.items" :key="group.id" class="Statistics-group">
            <div class="Labels-name">
              <Icon :name="group.name"></Icon>
            </div>
            <div class="Labels-amount">
              <div>
                {{ group.notes }}
              </div>
              <div class="removeLabel" v-if="removeRecordDate" @click="removeRecord(group.id)">
                <Icon name="shanchuTwo"></Icon>
              </div>
              <div>
                ￥{{ group.amount }}
              </div>
            </div>
          </li>
        </ol>
      </li>

    </ol>
    <div v-else class="notRecord">
      目前没有相关记录
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Inject} from 'vue-property-decorator';
import clone from '@/lib/clone';
import dayjs from 'dayjs';


@Component
export default class LabelStatistics extends Vue {
  @Inject() eventBus!: Vue;

  type = '-';

  removeRecordDate = false;

  mounted() {
    this.eventBus.$on('removeremoveRecord', (value: boolean) => {
      return this.removeRecordDate = value;
    });
  }

  beforeCreate() {
    this.$store.commit('read');
  }

  get recordData() {
    return (this.$store.state as rootState).recordData;
  }

  get recordList() {
    const recordList = this.recordData;
    this.eventBus.$on('update:type', (value: string) => {
      return this.type = value;
    });
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


  beauty(value: string) {
    if (dayjs(value).isSame(dayjs(), 'year')) {
      return dayjs(value).format('M月 DD日');
    } else {
      return dayjs(value).format('YYYY 年MM月 DD日');
    }
  }

  removeRecord(value: number) {
    this.$store.commit('removeRecord', value);
    return;
  }

}


</script>

<style lang="scss" scoped>
.notRecord{
  padding: 16px;
  text-align: center;
}


.Labels {
  background: #ffffff;
  padding-right: 10px;

  .Labels-item {
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

    .Labels-name {
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

    .Labels-amount {
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

.LabelsOne {
  width: 95%;
  margin: auto;
  height: 90%;
  overflow: auto;
}

.removeLabel {
  margin-right: 15px;

  .icon {
    color: red;
    font-size: 23px;
  }
}


</style>
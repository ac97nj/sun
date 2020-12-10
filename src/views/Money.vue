<template>
  <Layout >
    <Type
        @update:type=onType
    ></Type>
    <TimeDate
        @update:datevalue=onDateValue
    />
    <Tag :class="{NotesNumberClass:NotesNumberdata === true}"
         @update:Tag=onTagName
         @update:text=ontext
    ></Tag>
    <NotesNumber
        @update:NotesNumber=onNotesAmount
        @update:Notes=onNotes
        @submit="saveRecord"
        v-if="NotesNumberdata"
    ></NotesNumber>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Provide} from 'vue-property-decorator';
import Type from '@/components/money/type.vue';
import Tag from '@/components/money/tag.vue';
import NotesNumber from '@/components/money/notesNumber.vue';
import TimeDate from '@/components/money/timeDate.vue';
import dayjs from 'dayjs';


@Component({
  components: {TimeDate, Type, Tag, NotesNumber}
})
export default class Money extends Vue {
  @Provide() eventBus = new Vue;


  NotesNumberdata = false;


  record: RecordItem = {    //这个是record储存初始数据
    type: '-',
    name: '',
    text: '',
    notes: '',
    amount: 0,
    createAt: dayjs(new Date().toISOString()).format('YYYY-MM-DD')
  };


  get recordData() {
    return (this.$store.state as rootState).recordData;
  }


  //获取localStorage数据 到 recordList
  recordList: RecordItem[] = [];

  created() {
    this.$store.commit('read');
    this.recordList = this.recordData;
  }


  //localStorage 获取数据
  onType(value: string) {
    this.record.type = value;   //收集 type 的 -/+
    this.NotesNumberdata = false;

  }

  onTagName(value: string) {     //收集svg 名字
    this.record.name = value;
    this.NotesNumberdata = true;

  }

  ontext(value: string) {      //收集 svg txt
    this.record.text = value;
  }

  onNotes(value: string) {    //收集备注
    this.record.notes = value;
  }

  onNotesAmount(value: string) {    //收集键盘数数字
    this.record.amount = parseFloat(value);
  }

  onDateValue(value: string) {   //收集时间
    this.record.createAt = value;
  }


//更新数据
  saveRecord() {
    if (this.record.name === '') {
      window.alert('请选择类别');
    } else if (this.record.amount === 0) {
      window.alert('亲,至少输入一个金额');
    } else {
      this.$store.commit('createRecord', this.record);
      alert('记账成功');
      this.NotesNumberdata = false;
    }
  }
  
}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.NotesNumberClass {
  margin-bottom: 250px;
}


</style>
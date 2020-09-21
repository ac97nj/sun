<template>
  <Layout>
    <Type :value.sync=record.type></Type>
    {{ record }}
    <Tag :data-icon="dataIcon" @update:Tag=onTagName @update:text=ontext></Tag>
    <Notes @update:Notes=onNotes></Notes>
    <NotesNumber @update:NotesNumber=onNotesAmount></NotesNumber>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Type from '@/components/money/type.vue';
import Tag from '@/components/money/tag.vue';
import NotesNumber from '@/components/money/notesNumber.vue';
import Notes from '@/components/money/notes.vue';
import bus from '@/components/money/bus.ts';


type Record = {
  type: string;
  name: string;
  text: string;
  notes: string;
  amount: number;
}


@Component({
  components: {Type, Tag, NotesNumber, Notes,}
})
export default class Money extends Vue {
  dataIcon = [
    {name: 'gongzi', text: '工资'},
    {name: 'jiangjin', text: '奖金'},
    {name: 'jiaotong', text: '交通'},
    {name: 'lijing', text: '礼金'},
    {name: 'meirong', text: '美容'},
    {name: 'riyong', text: '日用'},
    {name: 'shiwu', text: '食物'},
    {name: 'yifu', text: '衣服'},
    {name: 'zaocan', text: '早餐'},
    {name: 'zhusu', text: '住宿'},
    {name: 'gupiao', text: '股票'},
    {name: 'shuiguo', text: '水果'},
    {name: 'xiezi', text: '鞋子'},

  ];

  created() {
    bus.$on('update:dataIcon', (obj: object) => {
      this.dataIcon.push(obj);
    });
  }


  record: Record = {
    type: '-',
    name: '',
    text: '',
    notes: '',
    amount: 0,
  };


  // onTyepe(value: string) {
  //   this.record.type = value;
  // }

  onTagName(value: string) {
    this.record.name = value;
  }

  ontext(value: string) {
    this.record.text = value;
  }


  onNotes(value: string) {
    this.record.notes = value;
  }

  onNotesAmount(value: string) {
    this.record.amount = parseFloat(value);
  }


}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>
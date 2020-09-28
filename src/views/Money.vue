<template>
  <Layout>
    <Type
        @update:type=onType
    ></Type>
    <Tag
        @update:Tag=onTagName
        @update:text=ontext

    ></Tag>
    <NotesNumber
        @update:NotesNumber=onNotesAmount
        @update:Notes=onNotes
        @submit="saveRecord"

    ></NotesNumber>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Provide} from 'vue-property-decorator';
import Type from '@/components/money/type.vue';
import Tag from '@/components/money/tag.vue';
import NotesNumber from '@/components/money/notesNumber.vue';



@Component({
  components: {Type, Tag, NotesNumber}
})
export default class Money extends Vue {
  @Provide() eventBus = new Vue;

  record: RecordItem = {    //这个是record储存初始数据
    type: '-',
    name: '',
    text: '',
    notes: '',
    amount: 0,
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
  }

  onTagName(value: string) {     //收集svg 名字
    this.record.name = value;
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


//更新数据
  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }

  //localStorage保存数据   //监控recordList
  // @Watch('recordList')
  // onRecordList() {
  //   recordModels.save();
  // }


}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
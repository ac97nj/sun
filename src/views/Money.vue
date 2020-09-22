<template>
  <Layout>
    <Type :value.sync=record.type></Type>
    <Tag :data-icon="dataIcon" @update:Tag=onTagName @update:text=ontext></Tag>
    <NotesNumber
        @update:NotesNumber=onNotesAmount
        @submit="saveRecord"
        @update:Notes=onNotes
    ></NotesNumber>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Type from '@/components/money/type.vue';
import Tag from '@/components/money/tag.vue';
import NotesNumber from '@/components/money/notesNumber.vue';
import Notes from '@/components/money/notes.vue';
import recordModels from '@/model/recordmodels.ts';
import tagModel from '@/model/tagModel.ts';

tagModel.getSave()
@Component({
  components: {Type, Tag, NotesNumber, Notes,}
})
export default class Money extends Vue {

  dataIcon = tagModel.getSave();

  created() {
    // bus.$on('update:dataIcon', (obj: { name: string; text: string }) => {this.dataIcon.push(obj)}
    // tagModel.readicondata()
  }


  record: RecordItem = {
    type: '-',
    name: '',
    text: '',
    notes: '',
    amount: 0,
  };

  recordList: RecordItem[] = recordModels.read();

  //localStorage 获取数据


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

//更新数据
  saveRecord() {
    const recordCopy: RecordItem = recordModels.Copy(this.record);
    recordCopy.createAt = new Date();
    this.recordList.push(recordCopy);
  }

  //localStorage保存数据
  @Watch('recordList')
  onRecordList() {
    recordModels.save(this.recordList);
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

</style>
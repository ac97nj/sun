<template>
  <Layout>
    <!--    <Type/>-->
    <!--    <Tags data-icon="dataIcon"/>-->
    <!--    <NotesNumber/>-->
    <Type/>
    <Tag :data-icon="dataIcon"/>
    <NotesNumber/>
  </Layout>
</template>

<script lang="js">


// import Vue from 'vue';
// import {Component} from 'vue-property-decorator';
// import Type from '@/components/money/type.vue';
// import Tags from '@/components/money/tag.vue';
// import NotesNumber from '@/components/money/notesNumber.vue';
//
// @Component({
//   components: {NotesNumber, Tags, Type}
// })
// export default class Money extends Vue {
//   dataIcon = [
//     {type: '-', name: 'zaocan', text: '早餐'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//     {type: '-', name: 'zaocan', text: '早餐'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//     {type: '-', name: 'zaocan', text: '早餐'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//     {type: '-', name: 'zhusu', text: '住宿'},
//     {type: '-', name: 'yifu', text: '衣服'},
//     {type: '+', name: 'gongzi', text: '鞋子'},
//   ];
//
// }

import Type from "@/components/money/type.vue";
import Tag from "@/components/money/tag.vue";
import NotesNumber from "@/components/money/notesNumber.vue";


export default {
  name: "Money",
  components: {NotesNumber, Tag, Type},
  data() {
    return {
      dataIcon: [
        {type: "-", name: "zhusu", text: "住宿"},
        {type: "-", name: "yifu", text: "衣服"},
        {type: "+", name: "gongzi", text: "鞋子"},
        {type: "-", name: "zhusu", text: "住宿"},
        {type: "-", name: "yifu", text: "衣服"},
        {type: "+", name: "gongzi", text: "鞋子"},
        {type: "-", name: "zhusu", text: "住宿"},
        {type: "-", name: "yifu", text: "衣服"},
        {type: "+", name: "gongzi", text: "鞋子"}
      ]
    };
  },

};


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>
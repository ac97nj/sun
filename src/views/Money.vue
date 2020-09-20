<template>
  <Layout>
    <Type/>
    <Tag :data-icon="dataIcon"/>
    <NotesNumber/>
  </Layout>
</template>

<script lang="js">


import Type from "@/components/money/type.vue";
import Tag from "@/components/money/tag.vue";
import NotesNumber from "@/components/money/notesNumber.vue";


export default {
  name: "Money",
  components: {NotesNumber, Tag, Type},
  data() {
    return {
      dataIcon: [
        {name: "gongzi", text: "工资"},
        {name: "jiangjin", text: "奖金"},
        {name: "jiaotong", text: "交通"},
        {name: "lijing", text: "礼金"},
        {name: "meirong", text: "美容"},
        {name: "riyong", text: "日用"},
        {name: "shiwu", text: "食物"},
        {name: "yifu", text: "衣服"},
        {name: "zaocan", text: "早餐"},
        {name: "zhusu", text: "住宿"},
        {name: "gupiao", text: "股票"},
        {name: "shuiguo", text: "水果"},
        {name: "xiezi", text: "鞋子"},
      ]
    };
  },



};


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>
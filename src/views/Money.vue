<template>
  <Layout>
    <Type/>
    <Tags/>
    <NotesNumber/>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Type from '@/components/money/type.vue';
import Tags from '@/components/money/tag.vue';
import NotesNumber from '@/components/money/notesNumber.vue';

@Component({
  components: {NotesNumber, Tags, Type}
})
export default class Money extends Vue {

}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>
<template>
<div>
  <Tags></Tags>
</div>
</template>

<script lang="ts">
import Vue from 'vue';


import {Component} from 'vue-property-decorator';
import Tags from '@/components/money/tag.vue';
@Component({
  components: {Tags}
})
export default class AA extends Vue {

}


</script>

<style lang="scss" scoped>

</style>
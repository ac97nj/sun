<template>
  <nav>
    <router-link to="/Labels" class="items" active-class="selected">
      <Icon name="label"/>
      明细
    </router-link>

    <router-link to="/Money" class="items" active-class="selected"
                 v-slot="{href, isActive, isExactActive}">
      <a :href="href" :class="[isExactActive && 'router-link-exact-active', isExactActive&&'selected']">
        <Icon name="sun" v-if="isExactActive"/>
        <Icon name="tally" v-else/>
        <!-- 金钱 -->
        记账
      </a>
    </router-link>

    <router-link to="/Statistics" class="items" active-class="selected">
      <Icon name="sta"/>
      统计
    </router-link>

  </nav>
</template>

<script lang="js">


export default {
  data() {
    return {
      is: true
    };
  },


};
</script>

<style lang="scss" scoped>



nav {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;

  > .items {
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .icon {
      width: 32px;
      height: 32px;

    }


  }

  > .items.selected {
    color: #FF931D;
  }


}


</style>
<template>
  <div>
    <nav class="add-nav">
      <router-link to="/" class="add-back ">
        <Icon name="fanhui"></Icon>
      </router-link>
      <ul class="add-isType">
        <li :class="type ==='-'&& 'selected' " @click="selectType('-')">
          支出
        </li>
        <li :class="type ==='+'&& 'selected' " @click="selectType('+')">
          收入
        </li>
      </ul>
      <div class="add-sort" @click="addCategory">
        <Icon name="wancheng"></Icon>
      </div>
    </nav>

    <div class="add-one">
      <div class="add-tag" :class="{selected : addTagName.length ===1 && 'selected'}">
        <Icon :name=" addTagName[0]"></Icon>
      </div>
      <label class="add-input">
        <input placeholder="超过 4 个字就不好看了,亲"
               v-model="inputText"
        />
      </label>
      <hr class="hr"/>
    </div>

    <ul class="add-label">
      <li v-for="(item,index) in addLabels" :key="index"
          @click="control(item)"
      >
        <div class="add-icon" :class="{ selected : addTagName.indexOf(item.name) >=0 && 'selected' }">
          <Icon :name="item.name"></Icon>
        </div>
      </li>
    </ul>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class AddTag extends Vue {

  type = '-';  // 储存 svg 的 - / +
  addTagName: string[] = [];    //储存 svg 的 name
  inputText = '';   //储存 svg 的 text

  addList: RecordItem[] = [];


  addLabels = [
    {name: 'dangao'},
    {name: 'fangsong'},
    {name: 'jingbi'},
    {name: 'kouhong'},
    {name: 'xiuxain'},
    {name: 'yundong'},
    {name: 'pingguo'},
  ];

  created() {
    return this.control({name: 'dangao'});
  }

  selectType(value: string) {
    if (value !== '-' && value !== '+') {
      throw  new Error('type');
    }
    this.type = value;
  }

  control(item: { name: string }) {
    this.addTagName.push(item.name);
    if (this.addTagName.length === 1) {
      return this.addTagName;
    } else {
      const index = this.addTagName.indexOf(item.name);
      this.addTagName.splice(index - 1, 1);
      return this.addTagName;
    }
  }


  addCategory() {
    const add: RecordItem = {type: '', name: '', text: ''};
    add.type = this.type;
    add.name = this.addTagName[0];
    add.text = this.inputText;
    this.$store.commit('crateTag', add);



  }
}


</script>

<style lang="scss" scoped>

.add-nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .add-isType {

    display: flex;
    width: 40%;


    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 30px;

      &.selected {
        background: #F5E4A2;
      }
    }
  }


  > .add-back {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    text-align: center;
    width: 50px;
    height: 40px;

    > .icon {
      font-size: 20px;
    }
  }

  > .add-sort {
    font-size: 20px;
    margin-right: 30px;
    text-align: center;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

  }
}

.add-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .add-tag {
    margin-top: 10px;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F0F1F2;
    border-radius: 50%;

    &.selected {
      background: #FF931D;
    }

    > .icon {
      font-size: 30px;
    }

  }

  .add-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    > input {
      border: none;
      height: 50px;
      padding-left: 15px;
      margin-bottom: 10px;
    }
  }

  .hr {
    width: 60%;
    margin: auto;
  }
}

.add-label {
  margin: auto;
  display: flex;
  width: 65%;
  padding-top: 10px;
  flex-wrap: wrap;

  > li {
    margin-left: 10px;
    margin-top: 15px;
    width: 20%;


    > .add-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #F0F1F2;
      width: 55px;
      height: 55px;
      border-radius: 50%;

      &.selected {
        background: #FF931D;
      }

      > .icon {
        font-size: 30px;
      }
    }
  }
}

</style>
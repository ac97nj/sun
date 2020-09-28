import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);


// dataIcon: [
//   {type: '-', name: 'xiezi', text: '鞋子'},
//   {type: '-', name: 'jiaotong', text: '交通'},
//   {type: '-', name: 'meirong', text: '美容'},
//   {type: '-', name: 'riyong', text: '日用'},
//   {type: '-', name: 'shiwu', text: '食物'},
//   {type: '-', name: 'yifu', text: '衣服'},
//   {type: '-', name: 'zaocan', text: '早餐'},
//   {type: '-', name: 'shuiguo', text: '水果'},
//   {type: '+', name: 'gongzi', text: '工资'},
//   {type: '+', name: 'jiangjin', text: '奖金'},
//   {type: '+', name: 'lijing', text: '礼金'},
//   {type: '+', name: 'gupiao', text: '股票'},
// ],



const store = new Vuex.Store({
    state: {
      dataIcon: [],
      tagIcon: [],
      recordData: [],
    } as rootState,
    mutations: {
      setRead(state) {       //推上去localStorage    ---挂 window 了
        window.localStorage.setItem('recordTagList', JSON.stringify(state.tagIcon));
      },
      getSave(state) {        //获取localStorage
        state.tagIcon = JSON.parse(window.localStorage.getItem('recordTagList') || '[]');
      },
      crateTag(state, add: RecordItem) {     //添加数据localStorage
        const add2: RecordItem = JSON.parse(JSON.stringify(add));
        store.commit('getSave');
        const BB = state.tagIcon.map(item => item.text);
        if (add.text === '') {
          window.alert('亲,名字不可为空');
          return;
        } else if (BB.indexOf(add.text) >= 0) {
          window.alert('标签名字重复');
          return;
        } else {
          state.tagIcon.push(add2);
          window.localStorage.setItem('recordTagList', JSON.stringify(state.tagIcon));
          router.push('/');
        }
      },
      fetchTags() {
        store.commit('crateTag', {type: '+', name: 'gongzi', text: '工资'},
        );
        store.commit('crateTag', {type: '-', name: 'shuiguo', text: '水果'});

      },
      removeTag(state, value) {     //删除数据localStorage
        let index = 0;
        store.commit('getSave');
        for (let i = 0; i < state.tagIcon.length; i++) {
          if (state.tagIcon[i].text === value) {
            index = i;
          }
        }
        state.tagIcon.splice(index, 1);
        window.localStorage.setItem('recordTagList', JSON.stringify(state.tagIcon));
      },

      //record

      read(state) {  //获取
        state.recordData = JSON.parse(window.localStorage.getItem('recordList') || '[]');
      },

      save(state) {   //推上去
        window.localStorage.setItem('recordList', JSON.stringify(state.recordData));
      },
      createRecord(state, record: RecordItem) {   //创建保存
        record.createAt = new Date().toISOString()
        record.id = createId;
        const recordCopy: RecordItem = clone(record);
        state.recordData.push(recordCopy);
        window.localStorage.setItem('recordList', JSON.stringify(state.recordData));
      },


    },
    actions: {},
    modules: {},
  }
);

export default store;
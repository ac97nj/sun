import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataIcon: [
      {type: '-', name: 'xiezi', text: '鞋子'},
      {type: '-', name: 'jiaotong', text: '交通'},
      {type: '-', name: 'meirong', text: '美容'},
      {type: '-', name: 'riyong', text: '日用'},
      {type: '-', name: 'shiwu', text: '食物'},
      {type: '-', name: 'yifu', text: '衣服'},
      {type: '-', name: 'zaocan', text: '早餐'},
      {type: '-', name: 'shuiguo', text: '水果'},
      {type: '+', name: 'gongzi', text: '工资'},
      {type: '+', name: 'jiangjin', text: '奖金'},
      {type: '+', name: 'lijing', text: '礼金'},
      {type: '+', name: 'gupiao', text: '股票'},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

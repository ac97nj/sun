import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);





// window.crateTag = (add: RecordItem) => {
//   const BB = tagModel.getSave().map(item => item.text);
//   if (add.text === '') {
//     window.alert('亲,名字不可为空');
//   } else if (BB.indexOf(add.text) >= 0) {
//     window.alert('标签名字重复');
//   } else {
//     console.log(add)
//     tagModel.crateTag(add);
//     window.alert('添加成功请返回');
//     // this.$router.push('/'); => 记着修改
//   }
// }




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

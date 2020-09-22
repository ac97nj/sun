// {type: '+', name: 'gongzi', text: '工资'},
// {type: '+', name: 'jiangjin', text: '奖金'},
// {type: '-', name: 'jiaotong', text: '交通'},
// {type: '+', name: 'lijing', text: '礼金'},
// {type: '-', name: 'meirong', text: '美容'},
// {type: '-', name: 'riyong', text: '日用'},
// {type: '-', name: 'shiwu', text: '食物'},
// {type: '-', name: 'yifu', text: '衣服'},
// {type: '-', name: 'zaocan', text: '早餐'},
//{type: '+', name: 'gupiao', text: '股票'},
//   {type: '-', name: 'shuiguo', text: '水果'},
//   {type: '-', name: 'xiezi', text: '鞋子'},

// const dataIcon = [
//   {type: '-', name: 'zhusu', text: '住宿'},
// ];

// const addLabels = [
//   {name: 'dangao'},
//   {name: 'fangsong'},
//   {name: 'jingbi'},
//   {name: 'kouhong'},
//   {name: 'xiuxain'},
//   {name: 'yundong'},
//   {name: 'pingguo'},
// ];

type tagTS = {
  dataIcon: RecordItem[];
  setRead: () => void;
  getSave: () => RecordItem[];
  addTag: (data: RecordItem) => void;
}


const tagModel: tagTS = {  //获取原本的 data 的数据

  dataIcon: [
    {type: '-', name: 'xiezi', text: '鞋子'},
  ],

  setRead() {       //推上去localStorage
    window.localStorage.setItem('recordTagList', JSON.stringify(this.dataIcon));
  },

  getSave() {   //获取localStorage
    return JSON.parse(window.localStorage.getItem('recordTagList') || '[]');
  },


  addTag(data) {
    this.dataIcon.push(data);
    this.setRead();
    this.getSave();
  }


};

export default tagModel;
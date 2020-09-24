//获取原本的 data 的数据
const tagModel: tagItem = {
  dataIcon: [{type: '-', name: 'xiezi', text: '鞋子'},
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


  setRead() {       //推上去localStorage    ---挂 window 了
    window.localStorage.setItem('recordTagList', JSON.stringify(this.dataIcon));
  },

  getSave() {        //获取localStorage
    return JSON.parse(window.localStorage.getItem('recordTagList') || '[]');
  },


  crateTag(add) {     //添加数据localStorage
    this.dataIcon.push(add);
    this.setRead();
  },


  removeTag(value) {     //删除数据localStorage
    let index = 0;
    let AA: RecordItem[] = [];
    AA = this.getSave();
    for (let i = 0; i < this.getSave().length; i++) {
      if (this.getSave()[i].text === value) {
        index = i;
      }
    }
    AA.splice(index, 1);
    window.localStorage.setItem('recordTagList', JSON.stringify(AA));
  }


};

export default tagModel;
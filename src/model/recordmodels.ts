//  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');    //localStorage 获取数据

//    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));   //保存数据


//  JSON.parse(JSON.stringify(data)) //使用 JSON 拷贝数据

const localStoragekey = 'recordList';

const recordModels = {
  Copy(data: RecordItem | RecordItem[] ) {
    return   JSON.parse(JSON.stringify(data));
  },


  read() {  //获取
    const recordReda: RecordItem[] = JSON.parse(window.localStorage.getItem(localStoragekey) || '[]');
    return recordReda;
  },

  save(data: RecordItem[]) {   //保存
    window.localStorage.setItem(localStoragekey, JSON.stringify(data));
  }


};

export default recordModels;
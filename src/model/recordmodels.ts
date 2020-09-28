//  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');    //localStorage 获取数据

//    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));   //保存数据


//  JSON.parse(JSON.stringify(data)) //使用 JSON 拷贝数据
//
// import clone from '@/lib/clone';
// import createId from '@/lib/createId';
//
//
//
// const recordModels = {
//
//   data: [] as RecordItem [],
//
//   Copy(data: RecordItem | RecordItem[]) {
//     return clone(data);
//   },
//
//   createRecord(record: RecordItem) {
//     const recordCopy: RecordItem = clone(record);
//     recordCopy.createAt = new Date().toISOString()
//     recordCopy.id = createId;
//     this.data.push(recordCopy);
//   },
//
//
//   // read() {  //获取
//   //   this.data = JSON.parse(window.localStorage.getItem('recordList') || '[]');
//   //   return this.data;
//   // },
//
//   // save() {   //保存
//   //   window.localStorage.setItem(localStoragekey, JSON.stringify(this.data));
//   // }
//
// };
//
// export default recordModels;
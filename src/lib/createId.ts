let id: number = parseInt(window.localStorage.getItem('keyID') || '0') || 0;

function createId() {
  id++;
  window.localStorage.setItem('keyID', id.toString());
  return id;
}

export default createId;

// let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;
//
// function crateID() {
//   id++;
//   window.localStorage.setItem('_idMax', id.toString());
//   return id;
// }
//
// export default crateID;
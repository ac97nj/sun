let id: number = parseInt(window.localStorage.getItem('keyID') || '0');

function createId() {
  id++;
  return id;
}

export default createId();
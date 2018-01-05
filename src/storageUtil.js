export default class StorageUtil {
  constructor() {
    this.localStorage = window && window.localStorage ? window.localStorage : {};
    this.sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
    this.hasWindowAccess = window && window.localStorage && window.sessionStorage;
  }

  clear(isLocal) {
    if (this.hasWindowAccess) {
      isLocal ? window.localStorage.clear() : window.sessionStorage.clear();
    }
  }

  set(isLocal, key, value) {
    if (this.hasWindowAccess) {
      isLocal ? window.localStorage.setItem(key, JSON.stringify(value)) : window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  remove(isLocal, key) {
    if (this.hasWindowAccess) {
      isLocal ? window.localStorage.removeItem(key) : window.sessionStorage.removeItem(key);
    }
  }

  get(isLocal, key) {
    let item = {};
    if (this.hasWindowAccess) {
      item = isLocal ? window.localStorage.getItem(key, JSON.parse(value)) : window.sessionStorage.getItem(key, JSON.parse(value));
    }
    return item;
  }
  
  getAll(isLocal) {
    let storage = {};
    const store = isLocal && this.hasWindowAccess ? Object.keys(window.localStorage) : Object.keys(window.sessionStorage);
    for (const key in store) {
      storage[key] = this.get(isLocal, key);
    }
    return storage;
  }
}

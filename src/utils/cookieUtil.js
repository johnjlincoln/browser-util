const cookie = require('cookie');
 
export default class CookieUtil {
  constructor(document) {
    this.cookies = document ? this.parseCookies(document) : {};
  }

  clear() {
    const cookies = Object.keys(this.cookies);

    if (cookies.length > 0) {
      cookies.map(key => this.remove(key));
    }
  }

  set(key, value, options = {}) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    
    this.cookies[key] = cookie.serialize(key, value, options); 
  }

  remove(key) {
    const expire = {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0
    };

    if (this.cookies[key]) {
      delete this.cookies[key];
      document.cookie = cookie.serialize(key, '', expire);
    }
  }

  get(key) {
    let item = this.cookies[key];
    if (item) {
      try {
        item = JSON.parse(item);
      } catch (e) {
        console.log('Error parsing cookie.');
      }
    }
    return item;
  }

  getCookies() {
    return this.cookies;
  }

  parseCookies(document) {
    const pairs = document.cookie.split(";");
    const cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      if (pair.length === 1) {
        continue;
      }
      cookies[(pair[0] + '').trim()] = unescape(pair[1]);
    }
    return cookies;
  }
}

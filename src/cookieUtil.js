import cookie from 'cookie';

export default class CookieUtil {
  constructor() {
    this.cookies = this.getCookies();
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
    
    if (document && document.cookie) {
      document.cookie = cookie.serialize(key, value, options);
    } 
  }

  remove(key) {
    const expire = {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0
    };

    if (this.cookies[key] && document && document.cookie) {
      delete this.cookies[key]
      document.cookie = cookie.serialize(key, '', expire);
    }
  }

  get(key) {
    try {
      return JSON.parse(this.cookies[key]);
    } catch (e) {
      // Whoops!
    }
  }

  getCookies() {
    const pairs = document.cookie.split(";");
    const cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = unescape(pair[1]);
    }
    return cookies;
  }
}

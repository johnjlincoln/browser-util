export default class CookieTestUtil {
  generateSingleCookieDoc() {
    let document = {};
    let cookie = '_ga=GA1.2.1562508967.1514991197;';
    document.cookie = cookie;
    return document;
  }

  generateMultCookieDoc() {
    let document = {};
    const cookieValue1 = 'GA1.2.1562508967.1514991197;';
    const cookieKey1 = '_ga';
    const cookie1 = cookieKey1 + '=' + cookieValue1;
    const cookieValue2 = 'P0-2122066946-1514991196863;';
    const cookieKey2 = '__qca';
    const cookie2 = cookieKey2 + '=' + cookieValue2;
    document.cookie = cookie1 + ' ' + cookie2;
    return document;
  }
}

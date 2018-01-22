export default class CookieTestUtil {
  constructor() {
    this.cookies = {};
    this.document = this.prepareDocument();
  }

  prepareDocument = () => {
    const document = {};
    const cookieValue1 = 'GA1.2.1562508967.1514991197;';
    const cookieKey1 = '_ga';
    const cookie1 = cookieKey1 + '=' + cookieValue1;
    const cookieValue2 = 'P0-2122066946-1514991196863;';
    const cookieKey2 = '__qca';
    const cookie2 = cookieKey2 + '=' + cookieValue2;
    const cookieValues = {
      cookieKey1,
      cookieValue1,
      cookieKey2,
      cookieValue2
    };
    document.cookie = cookie1 + ' ' + cookie2;
    this.prepareCookieArray(cookieValues);
    return document;
  }

  prepareCookieArray = (cookieValues) => {
    const {
      cookieKey1,
      cookieValue1,
      cookieKey2,
      cookieValue2
    } = cookieValues;
    this.cookies[cookieKey1] = cookieValue1;
    this.cookies[cookieKey2] = cookieValue2;
  }
}

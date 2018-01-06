import CookieUtil from '../cookieUtil';

// need tests for remove, set, clear

test('constructor to initialize when input empty', () => {
  const cookieUtil = new CookieUtil();
  expect(cookieUtil.cookies).toEqual({});
});

test('constructor to initialize when input given', () => {
  let document = {};
  let cookie = 
  '_ga=GA1.2.1562508967.1514991197;';
  document.cookie = cookie;
  const cookieUtil = new CookieUtil(document);
  const cookieUtilKey = Object.keys(cookieUtil.cookies)[0];
  expect(cookieUtilKey + '=' + cookieUtil.cookies[cookieUtilKey]).toEqual(cookie.substring(0, cookie.length-1));
});

test('util can obtain valid cookie', () => {
  let document = {};
  const cookieValue = 'GA1.2.1562508967.1514991197;';
  const cookieKey = '_ga';
  const cookie = cookieKey + '=' + cookieValue;
  document.cookie = cookie;
  const cookieUtil = new CookieUtil(document);
  const cookieObtained = cookieUtil.get(cookieKey);
  expect(cookieObtained).toEqual(cookieValue.substring(0, cookieValue.length - 1));
});

test('util can obtain all valid cookies', () => {
  let document = {};
  const cookieValue1 = 'GA1.2.1562508967.1514991197;';
  const cookieKey1 = '_ga';
  const cookie1 = cookieKey1 + '=' + cookieValue1;
  const cookieValue2 = 'P0-2122066946-1514991196863;';
  const cookieKey2 = '__qca';
  const cookie2 = cookieKey2 + '=' + cookieValue2;
  document.cookie = cookie1 + ' ' + cookie2;
  const cookieUtil = new CookieUtil(document);
  const cookiesObtained = cookieUtil.getCookies();
  expect(cookiesObtained[cookieKey1]).toEqual(cookieValue1.substring(0, cookieValue1.length - 1));
  expect(cookiesObtained[cookieKey2]).toEqual(cookieValue2.substring(0, cookieValue2.length - 1));
});



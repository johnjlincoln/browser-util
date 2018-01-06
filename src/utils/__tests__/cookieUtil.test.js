import CookieUtil from '../cookieUtil';
import CookieTestUtil from '../cookieTestUtil';

test('constructor to initialize when input empty', () => {
  const cookieUtil = new CookieUtil();
  expect(cookieUtil.cookies).toEqual({});
});

test('constructor to initialize when input given', () => {
  const cookie = '_ga=GA1.2.1562508967.1514991197;';
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  const cookieUtilKey = Object.keys(cookieUtil.cookies)[0];
  expect(cookieUtilKey + '=' + cookieUtil.cookies[cookieUtilKey]).toEqual(cookie.substring(0, cookie.length-1));
});

test('util can obtain valid cookie', () => {
  const cookieToVerify = 'GA1.2.1562508967.1514991197;';
  const cookieKey = '_ga';
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  const cookieObtained = cookieUtil.get(cookieKey);
  expect(cookieObtained).toEqual(cookieToVerify.substring(0, cookieToVerify.length - 1));
});

test('util can obtain all valid cookies', () => {
  const cookieValue1 = 'GA1.2.1562508967.1514991197;';
  const cookieValue2 = 'P0-2122066946-1514991196863;';
  const cookieKey1 = '_ga';
  const cookieKey2 = '__qca';
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  const cookiesObtained = cookieUtil.getCookies();
  expect(cookiesObtained[cookieKey1]).toEqual(cookieValue1.substring(0, cookieValue1.length - 1));
  expect(cookiesObtained[cookieKey2]).toEqual(cookieValue2.substring(0, cookieValue2.length - 1));
});

test('util can remove a valid cookie', () => {
  const cookieToRemove = '__qca';
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  const previousSize = Object.keys(cookieUtil.getCookies()).length;
  cookieUtil.remove(cookieToRemove);
  const newSize = Object.keys(cookieUtil.getCookies()).length;
  expect(newSize).toEqual(previousSize - 1);
});

test('util can clear cookies', () => {
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  cookieUtil.clear();
  const newSize = Object.keys(cookieUtil.getCookies()).length;
  expect(newSize).toEqual(0);
});

test('util can set cookie', () => {
  const cookieKey = 'logged-in';
  const cookieValue = true;
  const cookieTestUtil = new CookieTestUtil();
  const cookieUtil = new CookieUtil(cookieTestUtil.document);
  const previousSize = Object.keys(cookieUtil.getCookies()).length;
  cookieUtil.set(cookieKey, cookieValue);
  const newSize = Object.keys(cookieUtil.getCookies()).length;
  expect(newSize).toEqual(previousSize + 1);
});

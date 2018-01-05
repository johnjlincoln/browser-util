import CookieUtil from '../cookieUtil';

test('constructor to initialize', () => {
  const cookieUtil = new CookieUtil();
  expect(cookieUtil.cookies).toEqual({});
});
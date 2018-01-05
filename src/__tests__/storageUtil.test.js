import StorageUtil from '../storageUtil';

test('constructor to initialize', () => {
  const storageUtil = new StorageUtil();
  const emptyObject = {};
  expect(storageUtil.localStorage).toEqual(emptyObject);
  expect(storageUtil.sessionStorage).toEqual(emptyObject);
  expect(storageUtil.hasWindowAccess).toBe(undefined);
});
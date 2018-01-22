import StorageUtil from '../storageUtil';

test('constructor to initialize', () => {
  const storageUtil = new StorageUtil();
  const emptyObject = {};
  expect(storageUtil.hasWindowAccess).toBe(undefined);
});

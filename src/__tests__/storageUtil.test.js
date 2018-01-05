import StorageUtil from '../storageUtil';

mockWindow = () => {
  const window = {
    localStorage: {
      'logged-in': "true"
    }
  }
};

test('constructor to initialize', () => {
  const storageUtil = new StorageUtil();
  const emptyObject = {};
  console.log('ksjdfkjsf');
  console.log(window);
  console.log('ksjdfkjsf');
  expect(storageUtil.hasWindowAccess).toBe(undefined);
});
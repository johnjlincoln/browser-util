<h4 align="center">
  browser-util
</h4>
<h6>
  A utility for working with cookies, localStorage and sessionStorage.
</h6>

## Getting started

`npm install browser-util`

## API
## CookieUtil

### `get(key)`
Obtain a cookie value
 - key (string): cookie key

### `getCookies()`
Get all stored cookies

### `set(key, value, [options])`
Set a cookie value
- key (string): cookie key
- value (string or object): save the value
- options (object): Support all the cookie options from RFC 6265. [Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

### `remove(key)`
Remove a cookie
- key (string): cookie key

### `clear()`
Clear all current cookies

## Example

```js
import { CookieUtil } from 'browser-util';

const CookieUtil = new CookieUtil();

CookieUtil.set('favoriteCookie', 'Oatmeal');
console.log(CookieUtil.get('favoriteCookie')); // Oatmeal
```

## StorageUtil

### `get(isLocal, key)`
Obtain a storage value
 - isLocal (boolean): denotes localStorage operation
 - key (string): storage key

### `getAll(isLocal)`
Get all storage
- isLocal (boolean): denotes localStorage operation

### `set(isLocal, key, value)`
Set a storage value
- isLocal (boolean): denotes localStorage operation
- key (string): storage key
- value (string or object): save the value

### `remove(isLocal, key)`
Remove a storage value
- isLocal (boolean): denotes localStorage operation
- key (string): storage key

### `clear(isLocal)`
Clear all storage
- isLocal (boolean): denotes true if localStorage operation

## Example

```js
import { StorageUtil } from 'browser-util';

const StorageUtil = new StorageUtil();

StorageUtil.set(true, 'isValidUser', 'yup');
console.log(StorageUtil.get(true, 'isValidUser')); // yup
```


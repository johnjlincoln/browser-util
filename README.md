A browser utility for working with cookies, localStorage and sessionStorage.

## Getting started

`npm install browser-util`

## API - CookieUtil

### `get(key)`
Obtain a cookie value
 - key (string): cookie key

### `getCookies()`
Get all stored cookies

### `set(key, value, [options])`
Set a cookie value
- key (string): cookie key
- value (string or object): value to be saved
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

const favoriteCookie = CookieUtil.get('favoriteCookie'); // Oatmeal
```

## API - StorageUtil

### `get(isLocal, key)`
Obtain a storage value
 - isLocal (boolean): denotes localStorage operation
 - key (string): storage key

### `getAll(isLocal)`
Get all current storage
- isLocal (boolean): denotes localStorage operation

### `set(isLocal, key, value)`
Set a storage value
- isLocal (boolean): denotes localStorage operation
- key (string): storage key
- value (string or object): value to be saved

### `remove(isLocal, key)`
Remove a storage value
- isLocal (boolean): denotes localStorage operation
- key (string): storage key

### `clear(isLocal)`
Clear all current storage
- isLocal (boolean): denotes localStorage operation

## Example

```js
import { StorageUtil } from 'browser-util';

const StorageUtil = new StorageUtil();

StorageUtil.set(true, 'isValidUser', 'yup');

const isValidUser = StorageUtil.get(true, 'isValidUser'); // yup
```


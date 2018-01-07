A browser utility for working with cookies, localStorage and sessionStorage.

[Github](https://github.com/thesuperhomie/browser-util)
[NPM](https://www.npmjs.com/package/browser-util)

## Getting started

`npm install browser-util`

## API - CookieUtil

### `constructor(document)`
 - document (string): current document environment

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

const CookieUtil = new CookieUtil(document);

CookieUtil.set('favoriteCookie', 'Oatmeal');

const favoriteCookie = CookieUtil.get('favoriteCookie'); // Oatmeal
```

## API - StorageUtil

### `constructor(window)`
 - window (string): current window environment

### `get(isLocal, key)`
Obtain a storage value
 - isLocal (boolean): denotes localStorage operation
 - key (string): storage key

### `getStorage(isLocal)`
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

const StorageUtil = new StorageUtil(window);

StorageUtil.set(true, 'isValidUser', 'yup');

const isValidUser = StorageUtil.get(true, 'isValidUser'); // yup
```

## Example With React
```js
import React, { Component } from 'react';
import { CookieUtil } from 'browser-util';

class ExampleComponent extends Component {
  componentWillMount() {
    const cookieUtil = new CookieUtil(document);
    const cookieKey = // cookie key
    const dataToStore = // some data fetched in parent component etc.
    cookieUtil.set(cookieKey, dataToStore);
  }
  
  render() {
    return (
      <div>Some Mark-Up.</div>
    );
  }
}
```


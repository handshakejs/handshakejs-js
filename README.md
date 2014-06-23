# handshakejs -js

Handshakejs-js makes it easy to log your users into your application without using a password.

```javascript
Handshakejs.setAppName('handshake-js_test');
Handshakejs.setRootUrl('https://handshakejs-api.herokuapp.com');

Handshakejs.login.request({email: 'your@email.com', function(err, res) {
  if ( err ) console.warn( err );
  console.log('login requested: ', res.identities[0].email );
});
```

This library is part of the larger [Handshake.js ecosystem](https://github.com/handshakejs).

## Usage

### Handshakejs.setAppName(app_name)

```javascript
Handshakejs.setAppName('handshake-js_test');
```

### Handshakejs.setUrl(root_url)

```javascript
Handshakejs.setRootUrl('https://handshakejs-api.herokuapp.com');
```

### Handshakejs.login.request({email: email}, callback)

```javascript
Handshakejs.login.request({email: 'your@email.com', function(err, res) {
  if ( err ) console.warn( err );
  console.log('login requested: ', res.identities[0].email );
});
```

### Handshakejs.login.confirm({email: email, authcode: authcode}, callback)

```javascript
Handshakejs.login.confirm({email: 'your@email.com', authcode: '1234'}, function(err, res) {
  if ( err ) console.warn( err );
  console.log('login confirmed: ', res.identities[0].hash );
});
```

## Testing

Open `test/index.html`

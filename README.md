# handshakejs -js

Handshakejs-js makes it easy to log your users into your application without using a password.

## Usage

### Handshakejs.login.request($form, handler);

```javascript
Handshakejs.login.request($form, function(err, res) {
  if ( err ) console.warn( err );
  console.log('login requested: ', res.identities[0].email );
});
```

### Handshakejs.login.confirm($form, handler);

```javascript
Handshakejs.login.confirm($form, function(err, res) {
  if ( err ) console.warn( err );
  console.log('login confirmed: ', res.identities[0].hash );
});
```

## Testing

Open `test/index.html`

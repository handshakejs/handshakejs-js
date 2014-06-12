(function ( exports ) {

  function handshakejsSdk( $ ) {
    var app_name,
        root_url;

    return {
      setAppName: function ( value ) {
        app_name = value;
      },
      getAppName: function ( ) {
        return app_name;
      },
      setRootUrl: function ( value ) {
        root_url = value;
      },
      getRootUrl: function ( ) {
        return root_url;
      }
    }
  }

  if ( typeof define === 'function' ) {
    return define( 'Handshakejs', ['jquery'], handshakejsSdk )
  }
  // globals
  exports.Handshakejs = handshakejsSdk( jQuery );

}( this ));

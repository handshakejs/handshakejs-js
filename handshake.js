(function ( exports ) {

  function handshakejsSdk( $ ) {
    var app_name,
        root_url,
        processing;


    function _sendRequest ( endpoint, data ) {
    }

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
      },
      login: {
        request: function () {
          console.log(app_name);
          if ( !app_name ){
            return console.warn('Please specify an app_name.');
          }
          if ( !root_url ){ 
            return console.warn('Please specify a root_url.');
          }

          $.ajax({
            url : root_url + "/api/v1/login/request.json",
            data : {email: "scott@scottmotte.com", app_name: app_name},
            type : "post",
            success : function ( res, statuscode ) {
              console.log(statuscode);
              console.log(res);
              processing = true;
              return res;
            },
            error : function ( err ) {
              processing = false;
              return err;
            }
          })
        } 
      }
    }
  }

  if ( typeof define === 'function' ) {
    return define( 'Handshakejs', ['jquery'], handshakejsSdk )
  }
  // globals
  exports.Handshakejs = handshakejsSdk( jQuery );

}( this ));

(function ( exports ) {

  function handshakejsSdk( $ ) {
    var app_name,
        root_url;


    function _sendRequest ( endpoint, data, callback ) {
      return $.ajax({
        crossDomain : true,
        url : root_url + endpoint,
        data : data,
        type : "POST",
        success : function ( res, statuscode ) {
          callback(null, res);
        },
        error : function ( xhr, statuscode ) {
          var res = xhr.responseJSON;
          var msg = res.errors[0].message;
          var err = new Error(msg);
          callback(err, res);
        }
      });
    }

    function _setCall ( endpoint ) {
      return function ( values, callback ) {
        values = typeof values !== 'undefined' ? values : {};
        values.app_name = app_name;

        _sendRequest( endpoint, values, function( err, res ) {
          callback( err, res );
        });
      }
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
        request: _setCall('/api/v1/login/request.json'),
        confirm: _setCall('/api/v1/login/confirm.json')
      }
    }
  }

  if ( typeof define === 'function' ) {
    return define( 'Handshakejs', ['jquery'], handshakejsSdk )
  }
  // globals
  exports.Handshakejs = handshakejsSdk( jQuery );

}( this ));

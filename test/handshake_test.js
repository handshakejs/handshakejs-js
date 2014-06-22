var APP_NAME = "handshake-js_test",
    ROOT_URL = "http://handshakejs-api.herokuapp.com",
    EMAIL = "handshake-js_test@mailinator.com",
    AUTHCODE = "1234";

describe("Handshakejs", function() {
  describe("constructor", function() {
    it("can setAppName", function() {
      Handshakejs.setAppName(APP_NAME);
      expect(Handshakejs.getAppName()).to.equal(APP_NAME);
    });
    it("can setRootUrl", function() {
      Handshakejs.setRootUrl(ROOT_URL);
      expect(Handshakejs.getRootUrl()).to.equal(ROOT_URL);
    });
  });

  describe("login.request", function() {
    it("can make a login.request", function(done) {
      Handshakejs.setAppName(APP_NAME);
      Handshakejs.setRootUrl(ROOT_URL);
      Handshakejs.login.request({email: EMAIL}, function(err, res) {
        expect(err).to.equal(null);
        expect(res.identities[0].email).to.equal(EMAIL);
        expect(res.identities[0].app_name).to.equal(APP_NAME);

        done();
      });
    });
  });

  describe("login.confirm", function() {
    it("can make an invalid login.confirm", function(done) {
      Handshakejs.login.confirm({authcode: AUTHCODE, email: EMAIL}, function(err, res) {
        expect(err).to.not.equal("the authcode was incorrect");
        expect(res.errors[0].field).to.equal("authcode");

        done();
      });
    });
  });
});

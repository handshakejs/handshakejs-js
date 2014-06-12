var APP_NAME = "handshake-js_test",
    ROOT_URL = "http://handshakejs-api.herokuapp.com";

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
    it("can make a login.request", function() {
      Handshakejs.setAppName(APP_NAME);
      console.log(Handshakejs.getAppName());
      Handshakejs.setRootUrl(ROOT_URL);
      Handshakejs.login.request();
    });
  })
});

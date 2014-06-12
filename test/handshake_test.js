var APP_NAME = "app_name",
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
});

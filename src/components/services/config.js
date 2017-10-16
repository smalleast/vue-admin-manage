/**
 * Created by dcpai on 2017/7/6.
 */


(function () {

  const Config = {
    API_WITH_TOKEN: {
      baseUrl: '/user/',
      items: [
        'info',
        'logout'
      ]
    },
    API_WITHOUT_TOKEN: {
      baseUrl: '/user/',
      items: [
        'login'
      ]
    }
  };
  module.exports = Config;
}());

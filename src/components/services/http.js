import nxAxios from 'next-axios';
import Q from 'q';
import axios from 'axios';
import nx from 'next-js-core2';

const WeiPaiHttp = nx.declare({
  extends: nxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
      }
      return WeiPaiHttp.instance;
    }
  },
  methods: {
    init: function () {
      const env = nx.hashlize().env;
      this.$base.init.call(this);
      this.authorization();
      this.initHeaders();
      this.setDefaults({
        timeout: 600000,
        baseURL: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin' || './'
      });
      this.setRequestInterceptor();
    },
    initHeaders: function () {
      this.setHeaders({
        'clientType': 'H5'
      })
    },
    setRequestInterceptor: function () {
      axios.interceptors.request.use(function (config) {
        if (config.url.indexOf('/loginByPublic_100') > -1) {
          config.headers.common = nx.delete(config.headers.common, ['Authorization']);
        }
        return config;
      }, function (error) {
        nx.error(error);
      });
    },
    error: function (errorResponse) {
      const defer = Q.defer();
      const $hash = nx.hashlize();
      return defer.reject(errorResponse);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    authorization: function () {

    }
  }
});

export default WeiPaiHttp.getInstance();




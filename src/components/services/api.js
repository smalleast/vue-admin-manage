/**
 * Created by dcpai on 2017/7/6.
 */


import Http from './http';
import Config from './config';
import Q from 'q';

export default nx.declare({

  statics: {
    all(apis) {
      return Q.all(apis);
    },
    init() {
      this.apiWithoutToken();
      this.apiWithToken();
    },
    apiWithoutToken() {
      let Apis = Config.API_WITHOUT_TOKEN;
      Apis.items.forEach((item) => {
        this[item] = (inData,method) => {
          switch (method) {
            case 'post':
              return Http.post(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'get':
              return Http.get(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'put':
              return Http.put(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'delete':
              return Http.delete(`${Apis.baseUrl}${item}`, inData);
              break;
            default:
              return Http.post(`${Apis.baseUrl}${item}`, inData);
              break;
          }
        };
      });
    },
    apiWithToken() {
      let Apis = Config.API_WITH_TOKEN;
      Apis.items.forEach((item) => {
        this[item] = (inData,method) => {
          switch (method) {
            case 'post':
              return Http.post(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'get':
              return Http.get(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'put':
              return Http.put(`${Apis.baseUrl}${item}`, inData);
              break;
            case 'delete':
              return Http.delete(`${Apis.baseUrl}${item}`, inData);
              break;
            default:
              return Http.post(`${Apis.baseUrl}${item}`, inData);
              break;
          }
        };
      });
    }
  }
});

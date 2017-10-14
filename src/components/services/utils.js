/**
 * Created by dcpai on 2017/7/17.
 */
import moment from 'moment';

(function () {
  const Utils = {
    downloadLink: function () {
      if (this.browser.env.ios && !this.browser.env.ios8) {
        const {post_id,activity_id,auctionId,lotId,phaseId,productId,forumId} = nx.hashlize();
        let parms = {link: '', id: ''};
        if (post_id) {
          parms = {
            id: post_id,
            link: 'http://a.mlinks.cc/AaJO'
          }
        }
        else if (activity_id) {
          parms.link = "http://a.mlinks.cc/AaJj";
          parms.id = activity_id;
        }
        else if (auctionId) {
          parms.link = "http://a.mlinks.cc/AaJ3";
          parms.id = auctionId;
        }
        else if (lotId) {
          parms.link = "http://a.mlinks.cc/AaJN";
          parms.id = lotId;
        }
        else if (phaseId) {
          parms.link = "https://a.mlinks.cc/AKX9";
          parms.id = phaseId;
        }
        else if (productId) {
          parms.link = "https://a.mlinks.cc/AKXP";
          parms.id = productId;
        }else if(forumId){
          parms.link = "https://a.mlinks.cc/AcU4";
          parms.id = forumId;
        }
        if (parms.link) {
          let options = [
            {
              mlink: parms.link,
              button: document.querySelector("a#openAppDown"),
              params: {id: parms.id}
            }
          ];
          new Mlink(options);
        } else {
          document.getElementById('openAppDown').onclick = function () {
            Utils.download();
          };
        }
      } else {
        document.getElementById('openAppDown').onclick = function () {
          Utils.download();
        };
      }
    },
    download: function () {
      let IOS_APP = 'http://itunes.apple.com/cn/app/da-cang/id1080860264?ls=1&mt=8';
      let Android_APP = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.dcpai.auction';
      let PC_URL = 'http://www.dcpai.cn/';

      function init() {
        if (Utils.browser.env.weixin) {
          window.location.href = Android_APP;
        } else if (Utils.browser.env.ios) {
          window.location.href = IOS_APP;
        } else if (Utils.browser.env.android) {
          window.location.href = Android_APP;
        } else {
          window.location.href = PC_URL;
        }
      }

      init();
    },
    checkLiveDate: function (inData) {
      let live_msg = '';
      if (!!inData.endTime) {
        let dateStart = inData.startTime.replace(/-/g, '/');
        let dateEnd = inData.endTime.replace(/-/g, '/');
        let range = new Date(dateStart) - new Date();
        let rangeEnd = new Date(dateEnd) - new Date();
        let nowTime = new Date();
        if (range > 0) {
          let isToday = new Date(dateStart).getDate() === nowTime.getDate();
          let isTomorrow = new Date(dateStart).getDate() === this.dateAdd('d', 1, nowTime).getDate();
          switch (true) {
            case isToday:
              live_msg = '今天 ' + moment(dateStart).format('HH:mm')+' 开始';
              break;
            case isTomorrow:
              live_msg = '明天 ' + moment(dateStart).format('HH:mm')+' 开始';
              break;
            case !isToday && !isTomorrow:
              live_msg = moment(dateStart).format('MM月DD日 HH:mm')+' 开始';
              break;
          }
        } else if (rangeEnd < 0) {
          let isToday = new Date(dateStart).getDate() === nowTime.getDate();
          let isYearday =  new Date(dateStart).getDate() === this.dateAdd('d', -1, nowTime).getDate();
          switch (true) {
            case isToday:
              live_msg = '<span class="c-8">今天 ' + moment(dateStart).format('HH:mm') + '</span>';
              break;
            case !isToday :
              live_msg = '<span class="c-8">' + moment(dateStart).format('MM月DD日 HH:mm') + '</span>';
              break;
          }
        } else {
          let hours = parseInt(rangeEnd / 3600000);
          hours = hours < 9 ? '0' + hours : hours;
          live_msg = '距结束:' + hours + moment(rangeEnd).format('时mm分ss秒');
        }
      }
      return live_msg;
    },
    dateAdd: function (interval, number, date) {
      /*
       *   功能:实现VBScript的DateAdd功能.
       *   参数:interval,字符串表达式，表示要添加的时间间隔.
       *   参数:number,数值表达式，表示要添加的时间间隔的个数.
       *   参数:date,时间对象.
       *   返回:新的时间对象.
       *   var   now   =   new   Date();
       *   var   newDate   =   DateAdd( "d ",5,now);
       *---------------   DateAdd(interval,number,date)   -----------------
       */
      switch (interval) {
        case "Y":
          date.setFullYear(date.getFullYear() + number);
          break;
        case "M":
          date.setMonth(date.getMonth() + number);
          break;
        case "d":
          date.setDate(date.getDate() + number);
          break;
        case "h":
          date.setHours(date.getHours() + number);
          break;
        case "m":
          date.setMinutes(date.getMinutes() + number);
          break;
        case "s":
          date.setSeconds(date.getSeconds() + number);
          break;
        default:
          date.setDate(d.getDate() + number);
          break;
      }
      return date;
    },
    showPhotoSwipe: function (inIndex, inItems) {


    },
    browser: {
      env: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
          weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
          qq: u.match(/\sQQ/i) == " qq", //是否QQ
          ios8: u.indexOf('OS 8') > -1//判断是否ios8
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },
    getLocationSearch: function () {
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
          query_string[pair[0]] = arr;
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      }

      return query_string;
    },
    /*    getPageName: function () {
     var a = window.location.href;
     var b = a.split("/");
     var c = b.slice(b.length - 1, b.length).toString(String).split(".");
     return c.slice(0, 1);
     },
     setTitle: function (pTitle) {
     document.title = pTitle;
     var $body = $('body');
     var $iframe = $("<iframe style='display:none;' src='./favicon.ico'></iframe>");
     $iframe.on('load', function () {
     setTimeout(function () {
     $iframe.off('load').remove();
     }, 0);
     }).appendTo($body);
     },

     share: function (inData) {
     var share_url = window.location.href.split('#')[0];
     APP.getWeixinShareSign_220({url: share_url}, function (inResp) {
     var wxConfig = $.extend({
     debug: false, jsApiList: [
     'checkJsApi',
     'onMenuShareAppMessage',
     'onMenuShareTimeline'
     ]
     }, inResp);
     //alert('wxConfig::::' + JSON.stringify(wxConfig));
     wx.config(wxConfig);
     })

     wx.ready(function () {
     // alert('ready?');

     wx.onMenuShareAppMessage({
     title: inData.title,
     desc: inData.desc,
     link: share_url,
     imgUrl: inData.imgUrl || 'http://www.dcpai.cn/templets/webhtm/images/page0-qr.png',
     trigger: function (res) {
     //alert('用户点击发送给朋友');
     },
     success: function (res) {
     //alert('已分享');
     },
     cancel: function (res) {
     // alert('已取消');
     },
     fail: function (res) {
     // alert('Failed:' + JSON.stringify(res));
     }
     });
     wx.onMenuShareTimeline({
     title: inData.title,
     link: share_url,
     imgUrl: inData.imgUrl || 'http://www.dcpai.cn/templets/webhtm/images/page0-qr.png',
     success: function () {
     //alert('已分享');
     },
     cancel: function () {
     //alert('已取消');
     }
     });
     });

     },
     otherShare: function (inData) {
     var shareContent = {
     imgUrl: inData.images ? IMG_SERVER + '/' + inData.images.split(',')[0] + '?imageView/2/w/550&' + new Date().getTime() + '' : '',
     id: inData.id,
     title: inData.title || "龘藏,许你这江湖",
     desc: inData.desc || "详情"
     };
     setTimeout(function () {
     var config_url = window.location.href.split('#')[0];
     APP.getWeixinShareSign_220({url: config_url}, function (inResp) {
     var wxConfig = $.extend({
     debug: false, jsApiList: [
     'checkJsApi',
     'onMenuShareAppMessage',
     'onMenuShareTimeline'
     ]
     }, inResp);
     //alert('wxConfig::::' + JSON.stringify(wxConfig));
     wx.config(wxConfig);
     })

     wx.ready(function () {
     // alert('ready?');
     var share_url = inData.url;
     wx.onMenuShareAppMessage({
     title: shareContent.title,
     desc: shareContent.desc,
     link: share_url || config_url,
     imgUrl: shareContent.imgUrl || 'http://www.dcpai.cn/templets/webhtm/images/page0-qr.png',
     trigger: function (res) {
     //alert('用户点击发送给朋友');
     },
     success: function (res) {
     //alert('已分享');
     },
     cancel: function (res) {
     // alert('已取消');
     },
     fail: function (res) {
     // alert('Failed:' + JSON.stringify(res));
     }
     });
     wx.onMenuShareTimeline({
     title: shareContent.title,
     link: share_url || config_url,
     imgUrl: shareContent.imgUrl || 'http://www.dcpai.cn/templets/webhtm/images/page0-qr.png',
     success: function () {
     //alert('已分享');
     },
     cancel: function () {
     //alert('已取消');
     }
     });
     });

     }, 1000)

     }*/
  }

  module.exports = Utils;
}());

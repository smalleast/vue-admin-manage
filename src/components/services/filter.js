/**
 * Created by dcpai on 2017/7/14.
 */
import {IMG_SERVER} from './config';
import {EmotionsItems, AuctionStates, AuctionPrices} from './items';

//Filters:
Vue.filter('toUserLevels', function (value) {
  var val = (value >= 12 && value < 9900) ? 12 : value || 12;
  return 'images/user-levels/user-level-' + _pad(val, 2) + '.png';
});

Vue.filter('toQiNiuImg', function (inValue) {
  return inValue ? IMG_SERVER + '/' + inValue : '';
});
Vue.filter('toInvitationImg', function (inValue) {
  if (inValue) {
    var requestValue = '';
    requestValue += '<img src="./images/invitation/num-' + inValue.substr(0, 1) + '.png"  class="img-first-height"/>'
    requestValue += '<span>' + inValue.substr(1) + '</span>';
  }
  return requestValue;
});
Vue.filter('toJudgeImg', function (inValue) {
  return APP_ITEMS.judgeItems[inValue];
});
Vue.filter('toArray', function (value) {
  var inVal = (value || '').split(',');
  var list = [];
  inVal.forEach(function (item, index) {
    list.push({
      id: index,
      src: item
    })
  })
  return list;
});
Vue.filter('toLotQuery', function (inValue) {
  return 'LotQuery.html?lotId=' + inValue + '';
});
Vue.filter('toDateNull', function (inValue) {
  if (inValue === 'NaNInvalid date') {
    return;
  } else {
    return inValue;
  }
});
Vue.filter('toDateFormat', function (inValue) {
  if (inValue) {
    return moment(inValue).format('YYYY年MM月DD日 HH时mm分ss秒');
  }
});
Vue.filter('toCountDownFormat', function (inValue) {
  if (inValue) {
    return moment(inValue).format('MM月DD日 HH:mm') + '准时开奖';
  }
});
Vue.filter('toBuyDateFormat', function (inValue) {
  if (inValue) {
    return moment(inValue).format('MM月DD日 HH:mm:ss');
  }
});
Vue.filter('toCountDown', function (inValue) {
  if (inValue) {
    var oldTime = inValue;
    var countTime = '';
    if (oldTime && oldTime > 0) {
      var _day = parseInt(oldTime / 86400);
      var _hour = parseInt((oldTime % 86400) / 3600);
      var _minute = parseInt(((oldTime % 86400) % 3600) / 60);
      var _second = parseInt(((oldTime % 86400) % 3600) % 60);
      countTime = '距结束 ' + _day + '天' + _hour + '时' + _minute + '分' + _second + '秒'
    }
    return countTime;
  }
});
function _len(inVal) {
  if (inVal.toString().length == 1) {
    return '0' + inVal;
  }
  else {
    return inVal;
  }
}

Vue.filter('toThousands', function (inValue) {
  var num = (parseInt(inValue) || 0).toString(), result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  if (result == '0.00') {
    result = '0';
  }
  return result;
});
Vue.filter('auctionPricesToText', function ([inValue, inLeave]) {
  let status = (inValue === 'F' && !!inLeave) ? 'FL' : inValue;
  return AuctionPrices[status];
});
Vue.filter('toAuctionState', function (inValue) {
  return AuctionStates[inValue];
});
Vue.filter('activityToText', function (inValue) {
  return APP_ITEMS.activityStates[inValue];
});
Vue.filter('toTrim', function (inValue) {
  if (inValue == null) {
    return "";
  }
  var whitespace = new String(" \t\n\r");
  var str = new String(inValue);
  if (whitespace.indexOf(str.charAt(0)) != -1) {
    var j = 0, i = str.length;
    while (j < i && whitespace.indexOf(str.charAt(j)) != -1) {
      j++;
    }
    str = str.substring(j, i);
  }
  return str;
});
Vue.filter('nl2br', function (inMsg, inISXhtml) {
  var is_xhtml = inISXhtml || true;
  var breakTag = (is_xhtml) ? '<br />' : '<br>';
  var msg = (inMsg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  return msg;
});
Vue.filter('codeToImg', function (inValue) {
  if (!!inValue) {
    var emotionList = inValue.match(/\[[^\]]+\]/g) || [];
    var list = [];
    var replaceItem;
    nx.each(EmotionsItems, function (index, item) {
      replaceItem = [];
      replaceItem.push(new RegExp('\\[' + item.code.slice(1, -1) + '\\]', 'gi'));
      replaceItem.push(nx.format('<img width="70" src="{0}" />', [IMG_SERVER + '/' + item.value]));
      list.push(replaceItem);
    });
    var content = inValue;
    var emotionStr = "";
    if (emotionList.length > 0) {
      nx.each(emotionList, function (index, item) {
        emotionStr += item;
        content = content.replace(item, '');
      });
    }
    if (!!emotionStr) {
      content += "<br/>" + emotionStr;
    }
    return nx.mulReplace(content, list);
  } else {
    return '';
  }
});
function _pad(n, len) {
  var num = parseInt(n, 10);
  len = parseInt(len, 10);
  if (isNaN(num) || isNaN(len)) {
    return n;
  }
  num = '' + num;
  while (num.length < len) {
    num = '0' + num;
  }
  return num;
}
Vue.filter('toTimeInterval', function (inValue) {
  if (inValue) {
    var now = new Date();
    var publish = (new Date(String(inValue).replace(/-/g, '/')));
    var dayTs = 24 * 60 * 60 * 1000;
    var nowTs = now.getTime();
    var publishTs = publish.getTime();
    var isToday = publish.getDate() === now.getDate();
    var isYesterday = (new Date(nowTs - dayTs)).getDate() === publish.getDate();
    var isMonth = publish.getMonth() === now.getMonth();
    var isYear = publish.getYear() === now.getYear();
    var diff_s = (nowTs - publishTs) / 1000;
    var diff_m = diff_s / 60;
    var diff_h = diff_m / 60;


    switch (true) {
      case diff_s < 60:
        return '刚刚';
      case diff_m < 60:
        return Math.floor(diff_m) + '分钟前';
      case isToday && diff_h < 24:
        return Math.floor(diff_h) + '小时前';
      case isYear && isMonth && isYesterday:
        return '昨天 ' + inValue.slice(11, -3);
      case isYear:
        return inValue.slice(-14, -3);
      default:
        return inValue.slice(0, 10);
    }
  }
  return inValue;
});

Vue.prototype.CodeToImg = function (inValue) {
  if (!!inValue) {
    var emotionList = inValue.match(/\[[^\]]+\]/g) || [];
    var list = [];
    var replaceItem;
    nx.each(EmotionsItems, function (index, item) {
      replaceItem = [];
      replaceItem.push(new RegExp('\\[' + item.code.slice(1, -1) + '\\]', 'gi'));
      replaceItem.push(nx.format('<img width="70" src="{0}" />', [IMG_SERVER + '/' + item.value]));
      list.push(replaceItem);
    });
    var content = inValue;
    var emotionStr = "";
    if (emotionList.length > 0) {
      nx.each(emotionList, function (index, item) {
        emotionStr += item;
        content = content.replace(item, '');
      });
    }
    if (!!emotionStr) {
      content += "<br/>" + emotionStr;
    }
    return nx.mulReplace(content, list);
  } else {
    return '';
  }
};
Vue.prototype.toTrim = function (inValue) {
  if (inValue == null) {
    return "";
  }
  var whitespace = new String(" \t\n\r");
  var str = new String(inValue);
  if (whitespace.indexOf(str.charAt(0)) !== -1) {
    var j = 0, i = str.length;
    while (j < i && whitespace.indexOf(str.charAt(j)) !== -1) {
      j++;
    }
    str = str.substring(j, i);
  }
  return str;
};
Vue.prototype.Length = function (inValue) {
  return !!inValue ? inValue.length : 0;
};
Vue.prototype.toArray = function (inValue) {
  let list = (inValue || '').split(',');
  return list;
};

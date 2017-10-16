/**
 * Created by dcpai on 2017/7/17.
 */
(function () {
  const Items = {
    judgeItems: {
      "NEW": "images/tag-zhongqi-new.png",
      "ASSAYS": "images/tag-zhongqi-assays.png",
      "DOUBT": "images/tag-zhongqi-doubt.png",
      "OLD": "images/tag-zhongqi-lao.png",
      "GENUINE": "images/tag-zhongqi-genuine.png",
      "EXQUISITE": "images/tag-zhongqi-exquisite.png",
      "TRESON": "images/tag-zhongqi-treson.png"
    },
    AuctionStates: {
      "N": "未开拍",
      "A": "竞拍中",
      "F": "已结束"
    },
    AuctionPrices: {
      "N": "起拍价",
      "A": "当前价",
      "F": "成交价",
      "FL": "起拍价"
    },
    activityStates: {
      "N": "未开始",
      "A": "进行中",
      "F": "已结束"
    },
    EmotionsItems: [{
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:涨知识]",
      "value": "o_1avapmq7b1p9510jki917cf17cg7.png",
      "alias": "[涨知识]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:晕]",
      "value": "o_1avapva741ms41c0ttd2friqdh.png",
      "alias": "[晕]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:一眼假]",
      "value": "o_1avaq37nj6351ulm1u21ofobcar.png",
      "alias": "[一眼假]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:新的哦]",
      "value": "o_1avaq3tis1h1s12gh1gjqc9617c15.png",
      "alias": "[新的哦]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:请教]",
      "value": "o_1avaq4oi11o3t41617nqfdj196p1f.png",
      "alias": "[请教]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:大开眼界]",
      "value": "o_1avaq6mfi1q671uhms1b1t2m19b1p.png",
      "alias": "[大开眼界]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:看不清哦]",
      "value": "o_1avaq7ovu1vdck5atcomcg623.png",
      "alias": "[看不清哦]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:不开门]",
      "value": "o_1avaq8inr1jotnn31eht1flv188h2d.png",
      "alias": "[不开门]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:多上图]",
      "value": "o_1avaqb1nmgbuu01v9t14k81lfq2n.png",
      "alias": "[多上图]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:不错]",
      "value": "o_1avaqo8h64s8bs454160o1sul5m.png",
      "alias": "[不错]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:感谢分享]",
      "value": "o_1avaqfhr21qukppt18ikuh5ash31.png",
      "alias": "[感谢分享]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:精彩]",
      "value": "o_1avaqgdml2r91fmi1lnofeo189d3b.png",
      "alias": "[精彩]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:震撼]",
      "value": "o_1avaqh3q1cel1vp6pvb1jgvgu13l.png",
      "alias": "[震撼]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:重器]",
      "value": "o_1avaqhudglej1tit5m6vte2i23v.png",
      "alias": "[重器]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:精品]",
      "value": "o_1avaqj35esqc1d2kisdv9j1uf149.png",
      "alias": "[精品]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:大开门]",
      "value": "o_1avaqk0eh1jmm136h1ula1r9t16lt4j.png",
      "alias": "[大开门]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:值]",
      "value": "o_1avaqkonu1uvcd3g1qq53jk1u4q4t.png",
      "alias": "[值]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:欣赏]",
      "value": "o_1avaqlgic82e1lfm7inqd81ift5c.png",
      "alias": "[欣赏]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:霸气]",
      "value": "o_1b8qn1qnh1v3b1etq6m59gnbd7.png",
      "alias": "[霸气]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:馆藏级]",
      "value": "o_1b8qn9jjpd8oesaeb1vof1808h.png",
      "alias": "[馆藏级]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:原装]",
      "value": "o_1b8qnb791msb1elo1v0p1k9pgbdr.png",
      "alias": "[原装]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:罕见]",
      "value": "o_1b8qnckf7i1t12fn1ua212hh13gg15.png",
      "alias": "[罕见]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:捡漏]",
      "value": "o_1b8qnece95f81mquct61b8q1fc01f.png",
      "alias": "[捡漏]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:官造]",
      "value": "o_1b8qng2ld12nk1f441tbh1sdkiuk1p.png",
      "alias": "[官造]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:仿品]",
      "value": "o_1b8qnhpj1v4d14sr13kg1r8id023.png",
      "alias": "[仿品]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:到代]",
      "value": "o_1b8qnklpjqku14bt1pfi8e91bh92d.png",
      "alias": "[到代]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:愿吉祥]",
      "value": "o_1b8qnm0icg2qgdf1hocisira92n.png",
      "alias": "[愿吉祥]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:吐血]",
      "value": "o_1b8qnnf3ffq2vkh18m18ju113j31.png",
      "alias": "[吐血]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:壕]",
      "value": "o_1b8qnpehh2cu217uk0daleia3b.png",
      "alias": "[壕]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:瞬间不好了]",
      "value": "o_1b8qnqqs5d9g182p15n3s6m115k3l.png",
      "alias": "[我瞬间不好了]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:神圣]",
      "value": "o_1b8qnsqfg173s1hl6cr2ga9d5s3v.png",
      "alias": "[神圣]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:好萌啊]",
      "value": "o_1b8qnu21o1gc6nrsdjfvenub649.png",
      "alias": "[好萌啊]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:绝配]",
      "value": "o_1b8qnvmnm1pasu2iep7oh4145m4j.png",
      "alias": "[绝配]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:我是型男]",
      "value": "o_1b8qo15bk18ucdgv1ilrcjjb1a4t.png",
      "alias": "[我是型男]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:买不起]",
      "value": "o_1b8qo2lep1imqtf82sb1ff712i957.png",
      "alias": "[买不起]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:愤怒]",
      "value": "o_1b8qo911s1id617tspbpqggtn75h.png",
      "alias": "[愤怒]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:不开心]",
      "value": "o_1b8qoang6tu5jm4nk813t31d385r.png",
      "alias": "[没买到不开心]"
    }, {
      "id": "",
      "version": "",
      "createdBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "type": "A",
      "code": "[jz:啊]",
      "value": "o_1b8qod6g8k0o1gc77gb3ac4sm65.png",
      "alias": "[啊]"
    }]
  };
  module.exports = Items;
}());

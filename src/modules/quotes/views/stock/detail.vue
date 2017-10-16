<template>
  <div class="contract-detail">
    <el-button class="sure-order" @click="onPay">我已线下付款</el-button>
    <div class="detail">
      <div class="top-msg">
        <div class="title">
          <h1>采购订单</h1>
          <h2>Purchase Order</h2>
          <span>待确认</span>
        </div>
      </div>
      <table>
        <tr>
          <td style="width: 180px;">
            <div>
              <p>Order No. 采购订单号：</p>
              <p>Order Date 订货日期：</p>
              <p>Delivery Date 交货日期：</p>
              <p>Delivery address 收货地址：</p>
              <p>Suppiler 供应商：</p>
              <p>Bank account 开户行帐号：</p>
              <p>Contact 联系人：</p>
              <p>Tel 电话：</p>
            </div>
          </td>
          <td style="width: 380px;">
            <div>
              <p>GAE2017090712548</p>
              <p>2017-09-05</p>
              <p>2017-09-28</p>
              <p>江苏昆山市千灯镇黄浦江路西侧</p>
              <p>斑斓供应链管理（上海）有限公司</p>
              <p>招商银行大宁支行  6562641962649</p>
              <p>陈贵财</p>
              <p>021-56565656</p>
            </div>
          </td>
          <td style="width: 180px;">
            <div>
              <p>Purchaser 采购方：</p>
              <p style="height: 40px;">Address 地址：</p>
              <p>Tax number 税务登记号：</p>
              <p>Bank account 开户行帐号：</p>
              <p>FAX 传真：</p>
              <p>Zip code 邮编：</p>

            </div>
          </td>
          <td style="width: 380px;">
            <div>
              <p>康玛尼奥家具（昆山）有限公司</p>
              <p>West Huangpujiang Road Kunshan Economic & Technological Zone Jiangsu Province P.R. China
                江苏昆山市千灯镇黄浦江路西侧</p>
              <p>4564654232</p>
              <p>中行千灯分理处 564956492189243</p>
              <p>0512-5555555</p>
              <p>215654</p>
            </div>
          </td>
        </tr>
      </table>
      <div class="table-msg">
        <h1>采购明细</h1>
        <div class="table">
          <el-table tooltip-effect="dark" :fit="false" :data="list" border fit highlight-current-row>
            <el-table-column label="产品类别" align="center" show-overflow-tooltip>
              <template scope="scope">
                <span>{{scope.row.type}}</span>
              </template>
            </el-table-column>
            <el-table-column label="名称" align="center">
              <template scope="scope">
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="规格" min-width="110" show-overflow-tooltip align="center">
              <template scope="scope">
                <span>{{scope.row.size}}</span>
              </template>
            </el-table-column>
            <el-table-column label="图片" align="center">
              <template scope="scope">
                /
              </template>
            </el-table-column>
            <el-table-column label="单位" align="center">
              <template scope="scope">
                {{scope.row.util}}
              </template>
            </el-table-column>
            <el-table-column label="数量" align="center">
              <template scope="scope">
                {{scope.row.num}}
              </template>
            </el-table-column>
            <el-table-column label="单价" min-width="100" align="center">
              <template scope="scope">
                {{scope.row.price}}
              </template>
            </el-table-column>
            <el-table-column label="含税单价" min-width="100" align="center">
              <template scope="scope">
                {{scope.row.priceshui}}
              </template>
            </el-table-column>
            <el-table-column align="center" min-width="100" label="金额">
              <template scope="scope">
                <span>{{scope.row.money}}</span>
              </template>
            </el-table-column>
            <el-table-column label="税率%" align="center">
              <template scope="scope">
                {{scope.row.shuilv}}
              </template>
            </el-table-column>
            <el-table-column label="税额" min-width="100" align="center">
              <template scope="scope">
                {{scope.row.shuie}}
              </template>
            </el-table-column>
            <el-table-column label="价税合计" min-width="100" align="center">
              <template scope="scope">
                {{scope.row.shuisum}}
              </template>
            </el-table-column>
          </el-table>
          <el-table tooltip-effect="dark">
            <el-table-column align="right"></el-table-column>
            <el-table-column label="总计 2" width="200" align="right"></el-table-column>
            <el-table-column label="￥132000.00" width="200" align="center"></el-table-column>
          </el-table>
        </div>
      </div>

      <div class="implement">
        <h1>订单执行</h1>
        <div>
          <el-table ref="multipleTable" tooltip-effect="dark" :data="contractList" border fit highlight-current-row>
            <el-table-column label="阶段内容" align="center" show-overflow-tooltip>
              <template scope="scope">
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="状态" align="center">
              <template scope="scope">
                {{scope.row.status}}
              </template>
            </el-table-column>
            <el-table-column label="详细说明" align="center" show-overflow-tooltip>
              <template scope="scope">
                {{scope.row.desc}}
              </template>
            </el-table-column>
            <el-table-column label="付款金额" align="center">
              <template scope="scope">
                {{scope.row.price}}
              </template>
            </el-table-column>
            <el-table-column align="center" label="实付金额">
              <template scope="scope">
                /
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button @click="onPay" style="margin: 20px">我已线下付款</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="agreement">
        <h1>订单协议</h1>
        <div>本协议（包括风险披露声明、客户告鉴、本客户协议以及开户申请表）将持续有效，并涵盖客户任何时候在斑斓科技开立或重新开立的所有账户，不论任何斑斓科技或其他继承人、转让人的人事变动。如果发生合併、兼併或其他变动，本协议（包括任何授权）将适应斑斓科技或其他继承人或转让人的利益，并对客户及其/或其遗产继承人、委託人、管理人、法定代表、继承人和转让人具有约束效力。</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AppBase, Api} from 'components/vue/index'

  export default {
    data() {
      return {
        list: [],
        contractList: []
      }
    },
    filters: {},
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.list = Api.caigouList;
        this.contractList = Api.hetongList;
      },
      onPay() {
        this.$confirm('你确定已付款吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({path: '/stock/list'})
        }).catch(() => {
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .contract-detail {
    width: 96%;
    padding: 2%;
    .el-table__empty-block {
      display: none;
    }
    .sure-order {
      margin-bottom: 20px;
    }
    .detail {
      border: 1px solid #eee;
      padding: 30px;
      .top-msg {
        .title h1 {
          font-weight: bold;
        }
        .title h2 {
          font-weight: bold;
          margin-top: 10px;
        }
        .title span {
          padding: 10px 20px;
          border: 1px dashed #ddd;
          float: right;
          margin-top: -50px;
        }
      }

      .table-msg {
        margin-top: 60px;
        h1 {
          font-weight: bold;
          margin-bottom: 20px;
        }
      }

      .implement {
        margin-top: 100px;
        h1 {
          font-weight: bold;
          margin-bottom: 20px;
        }
      }
      .agreement {
        margin-top: 50px;
        h1 {
          font-weight: bold;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

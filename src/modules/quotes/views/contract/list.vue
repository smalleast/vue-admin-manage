<template>
  <div class="app-container contract-list">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">全部</el-tab-pane>
      <el-tab-pane label="待确认" name="second">待确认</el-tab-pane>
      <el-tab-pane label="待首付" name="third">待首付</el-tab-pane>
      <el-tab-pane label="交付中" name="fourth">交付中</el-tab-pane>
      <el-tab-pane label="尾款" name="Fifth">尾款</el-tab-pane>
      <el-tab-pane label="已完成" name="Sixth">已完成</el-tab-pane>
    </el-tabs>

    <el-table ref="multipleTable" tooltip-effect="dark" :data="list" border fit highlight-current-row>
      <el-table-column label="合同编号" width="180" align="center">
        <template scope="scope">
          <span>{{scope.row.orderNum}}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单名称" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.orderName}}
        </template>
      </el-table-column>
      <el-table-column label="采购日期" width="120" align="center">
        <template scope="scope">
          {{scope.row.purchaseData}}
        </template>
      </el-table-column>
      <el-table-column label="数量(件)" width="100" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="交货日期" align="center" width="120">
        <template scope="scope">
          {{scope.row.deliveryData}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="金额" width="110">
        <template scope="scope">
          <span>￥{{scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" width="100" align="center">
        <template scope="scope">
          <span v-if="scope.row.orderStatus === 0">待确认</span>
          <span v-if="scope.row.orderStatus === 1">首付待付款</span>
          <span v-if="scope.row.orderStatus === 2">交付中</span>
          <span v-if="scope.row.orderStatus === 3">尾款待付款</span>
          <span v-if="scope.row.orderStatus === 4">已完成</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template scope="scope">
          <el-button size="small" v-if="scope.row.orderStatus === 0 " @click="dialogShow('是否确定合同?')">确认合同</el-button>
          <el-button @click="hrefHandle(scope.row.orderStatus)" size="small" style="margin: 20px">
            查看详情
          </el-button>
          <el-button size="small" v-if="scope.row.orderStatus === 0 || scope.row.orderStatus === 4 "
                     @click="dialogShow('是否确定删除？')" type="danger">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {AppBase, Api} from 'components/vue/index'

  export default {
    data() {
      return {
        list: null,
        activeName: 'first'
      }
    },
    filters: {},

    created() {
      this.fetchData()
    },
    methods: {
      handleClick(tab, event) {

      },
      dialogShow(text){
        this.$confirm(text, '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        }).catch(() => {
        });
      },

      hrefHandle(index){
        this.$router.push({
          path: '/contract/detail',
          query: {id: index}
        })
      },
      fetchData() {
        this.list = Api.contractList;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .contract-list {
    .img-size {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
    .pages {
      margin: 40px auto;
      text-align: center;
    }
    .el-tabs__content {
      display: none;
    }
  }


</style>

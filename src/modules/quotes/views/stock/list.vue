<template>
  <div class="app-container">
    <el-table ref="multipleTable" tooltip-effect="dark" :data="list" border fit highlight-current-row>
      <el-table-column label="订单编号" align="center">
        <template scope="scope">
          <span>{{scope.row.code}}</span>
        </template>
      </el-table-column>
      <el-table-column label="采购日期" align="center">
        <template scope="scope">
          <span>{{scope.row.time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="木材名称" align="center">
        <template scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="数量" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="预计交货日期" align="center">
        <template scope="scope">
          {{scope.row.endTime}}
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center">
        <template scope="scope">
          {{scope.row.status}}
        </template>
      </el-table-column>
      <el-table-column label="住逻辑报价（单价）" min-width="120" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="金额" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.money}}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="120" show-overflow-tooltip>
        <template scope="scope">
          <el-button @click="onDetail" style="margin:20px;">查看详情</el-button>
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
        list: null
      }
    },
    filters: {},
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.list = Api.stockList;
      },
      releaseDemand(){
        const h = this.$createElement;
        this.$msgbox({
          title: '报价流程',
          message: h('p', null, [
            h('div', null, '报价'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '备注信息'),
            h('textarea', {class: 'el-input el-textarea__inner', style: 'margin-top:5px'}, '')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '报价成功'
          });
        });
      }, onDetail(){
        this.$router.push({path: '/stock/detail'});
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .img-size {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .el-table th > .cell {
    line-height: 1;
  }

  .el-table .cell {
    line-height: 20px;
  }

  .app-container {
    padding: 20px;
  }

  .batch {
    margin-bottom: 20px;
  }
</style>

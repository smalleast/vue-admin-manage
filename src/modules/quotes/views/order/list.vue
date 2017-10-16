<template>
  <div class="app-container">
    <el-button @click="batchQuotes" class="batch">批量报价</el-button>
    <el-table ref="multipleTable" tooltip-effect="dark" :data="list" border fit highlight-current-row
              @selection-change="handleSelectionChange">
      <el-table-column align="center" type="selection" width="95">
      </el-table-column>
      <el-table-column label="名称" width="100" align="center">
        <template scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品图片" width="136" align="center">
        <template scope="scope">
          <img :src="scope.row.src" class="img-size" alt="">
        </template>
      </el-table-column>
      <el-table-column label="参考尺寸W*D*H(mm)" width="170" align="center">
        <template scope="scope">
          {{scope.row.size}}
        </template>
      </el-table-column>
      <el-table-column label="数量" width="110" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="单位" width="110" align="center">
        <template scope="scope">
          {{scope.row.util}}
        </template>
      </el-table-column>
      <el-table-column label="材质" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.desc}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="交付日期" width="200">
        <template scope="scope">
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="目前最低报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template scope="scope">
          <el-button type="text" @click="openPrice">报价</el-button>
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
        multipleSelection: []
      }
    },
    filters: {},
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.list = Api.bidList;
      },
      openPrice(){
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
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      batchQuotes(){
        if (this.multipleSelection.length > 0) {
          AppBase.session = {quotes: this.multipleSelection};
          this.$router.push({path: '/order/detail'});
        }else {
          this.$message.error('请先选择产品！');
        }
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

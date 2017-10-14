<template>
  <div class="app-container">
    <el-button @click="releaseDemand" class="batch">发布需求</el-button>
    <el-table ref="multipleTable" tooltip-effect="dark" :data="list" border fit highlight-current-row>
      <el-table-column label="创建时间" align="center">
        <template scope="scope">
          <span>{{scope.row.time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="木材名称" align="center">
        <template scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="地区" align="center">
        <template scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>
      <el-table-column label="数量" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="期望交货日期" align="center">
        <template scope="scope">
          {{scope.row.endTime}}
        </template>
      </el-table-column>
      <el-table-column label="备注说明" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.remark}}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" show-overflow-tooltip>
        <template scope="scope">
          <el-button @click="demandClear" style="margin: 20px">撤消</el-button>
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
        this.list = Api.demand;
      },
      releaseDemand(){
        const h = this.$createElement;
        this.$msgbox({
          message: h('p', null, [
            h('div', null, '材料名称'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '规格'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '地区'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '采购量'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '期望交付日期'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '联系人'),
            h('input', {class: 'el-input el-input__inner', style: 'margin-top:5px'}, ''),
            h('div', {style: 'margin-top:15px'}, '联系电话'),
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
            message: '发布需求成功'
          });
        });
      },
      demandClear(){
        this.$alert('你确定要撤销这项需求管理吗', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {

          }
        });
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

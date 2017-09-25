<template>
  <div class="app-container">
    <el-table
      ref="multipleTable"
      :data="tableData3"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <el-table ref="multipleTable"  tooltip-effect="dark" :data="list" border fit highlight-current-row  @selection-change="handleSelectionChange">
      <el-table-column align="center"  width="95">
        <template scope="scope">
          <el-checkbox v-model="checked">{{scope.$index+1}}</el-checkbox>
        </template>
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
      <el-table-column label="参考尺寸W*D*H(mm)" width="110" align="center">
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
      <el-table-column label="材质" align="center">
        <template scope="scope">
          {{scope.row.desc}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="交互日期" width="200">
        <template scope="scope">
          <i class="el-icon-time"></i>
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
  import {Api} from 'components/vue/index'

  export default {
    data() {
      return {
        list: null,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
            h('input', {class: 'el-input el-input__inner',style:'margin-top:5px'}, ''),
            h('div', {style:'margin-top:15px'}, '备注信息'),
            h('textarea',  {class: 'el-input el-textarea__inner',style:'margin-top:5px'}, '')
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
</style>

<template>
  <div class="app-container">
    <el-button @click="quotesClear" class="batch">取消</el-button>
    <el-button @click="quotesComplete" class="batch" type="primary">完成报价</el-button>
    <el-table tooltip-effect="dark" :data="list" border fit highlight-current-row>
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
      <el-table-column align="center" prop="created_at" label="交付日期" width="130">
        <template scope="scope">

          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="目前最低报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="报价（RMB）" align="center">
        <template scope="scope">
          <el-input  placeholder="请输入报价"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template scope="scope">
          <el-input  placeholder="请输入备注"></el-input>
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
      quotesClear(){
        this.$router.push({path: '/order/list'});

      },
      quotesComplete(){
        this.$alert('您的报价已发布成功，您可以到报价管理中查看您的报价记录', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/order/list'});
          }
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .img-size {
    width: 90px;
    height: 90px;
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

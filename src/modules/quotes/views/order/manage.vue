<template>
  <div class="manage-container">
    <output class="manage-time">2017-09-18发布报价</output>
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
      <el-table-column label="参考尺寸W*D*H(mm)" width="110" align="center">
        <template scope="scope">
          {{scope.row.size}}
        </template>
      </el-table-column>
      <el-table-column label="数量" width="80" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="单位" width="70" align="center">
        <template scope="scope">
          {{scope.row.util}}
        </template>
      </el-table-column>
      <el-table-column label="材质" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.desc}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="交付日期" width="120">
        <template scope="scope">
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="目前最低报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="本公司报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.currentprice}}
        </template>
      </el-table-column>
      <el-table-column label="备注" width="110" align="center">
        <template scope="scope">
          {{scope.row.remark}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template scope="scope">
          <el-button type="text" @click="openPrice">重新报价</el-button>
        </template>
      </el-table-column>
    </el-table>
    <output class="manage-time">2017-09-19发布报价</output>
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
      <el-table-column label="参考尺寸W*D*H(mm)" width="110" align="center">
        <template scope="scope">
          {{scope.row.size}}
        </template>
      </el-table-column>
      <el-table-column label="数量" width="80" align="center">
        <template scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column label="单位" width="70" align="center">
        <template scope="scope">
          {{scope.row.util}}
        </template>
      </el-table-column>
      <el-table-column label="材质" align="center" show-overflow-tooltip>
        <template scope="scope">
          {{scope.row.desc}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="交付日期" width="120">
        <template scope="scope">
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="目前最低报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="本公司报价（RMB）" width="110" align="center">
        <template scope="scope">
          {{scope.row.currentprice}}
        </template>
      </el-table-column>
      <el-table-column label="备注" width="110" align="center">
        <template scope="scope">
          {{scope.row.remark}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template scope="scope">
          <el-button type="text" @click="openPrice">重新报价</el-button>
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

  .manage {
    &-container {
      padding: 20px;
    }
    &-time {
      display: inline-block;
      font-size: 16px;
      width: 100%;
      height: 40px;
      background: #eee;
      line-height: 40px;
      text-indent: 12px;
      &.mt {
        margin-top: 35px;
      }
    }

  }
</style>

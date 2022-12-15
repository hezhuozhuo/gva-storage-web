<template>
  <div>
    <div class="gva-search-box">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
      <el-form-item label="创建时间">
      <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始时间"></el-date-picker>
       —
      <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束时间"></el-date-picker>
      </el-form-item>
        <el-form-item label="用户id">
            
             <el-input v-model.number="searchInfo.userId" placeholder="搜索条件" />

        </el-form-item>
        <el-form-item label="脚本名称">
         <el-input v-model="searchInfo.scriptName" placeholder="搜索条件" />

        </el-form-item>
        <el-form-item label="作者">
         <el-input v-model="searchInfo.scriptAuthor" placeholder="搜索条件" />

        </el-form-item>
           <el-form-item label="审批标志" prop="approvalFlag">
            <el-select v-model="searchInfo.approvalFlag" clearable placeholder="请选择" @clear="()=>{searchInfo.approvalFlag=undefined}">
              <el-option v-for="(item,key) in APPROVAL_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
            </el-select>
            </el-form-item>
           <el-form-item label="删除标志" prop="deleteFlag">
            <el-select v-model="searchInfo.deleteFlag" clearable placeholder="请选择" @clear="()=>{searchInfo.deleteFlag=undefined}">
              <el-option v-for="(item,key) in DELETE_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
            </el-select>
            </el-form-item>
        <el-form-item label="协议类型">
         <el-input v-model="searchInfo.protocolType" placeholder="搜索条件" />

        </el-form-item>
        <el-form-item label="产品名称">
         <el-input v-model="searchInfo.productName" placeholder="搜索条件" />

        </el-form-item>
        <el-form-item label="产品公司">
         <el-input v-model="searchInfo.productCompany" placeholder="搜索条件" />

        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button size="small" icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
        <div class="gva-btn-list">
            <el-button size="small" type="primary" icon="plus" @click="openDialog">新增</el-button>
            <el-popover v-model:visible="deleteVisible" placement="top" width="160">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
                <el-button size="small" type="primary" link @click="deleteVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="onDelete">确定</el-button>
            </div>
            <template #reference>
                <el-button icon="delete" size="small" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="deleteVisible = true">删除</el-button>
            </template>
            </el-popover>
        </div>
        <el-table
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
        :data="tableData"
        row-key="ID"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />
        <el-table-column align="left" label="日期" width="180">
            <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>
        <el-table-column align="left" label="用户id" prop="userId" width="120" />
        <el-table-column align="left" label="脚本名称" prop="scriptName" width="120" />
        <el-table-column align="left" label="脚本描述" prop="scriptDescribe" width="120" />
        <el-table-column align="left" label="版本号" prop="versionNumber" width="120" />
        <el-table-column align="left" label="作者" prop="scriptAuthor" width="120" />
        <el-table-column align="left" label="富文本" prop="richText" width="120" />
        <el-table-column align="left" label="介绍文本" prop="explainText" width="120" />
        <el-table-column sortable align="left" label="点击数" prop="hits" width="120" />
        <el-table-column align="left" label="审批标志" prop="approvalFlag" width="120">
            <template #default="scope">
            {{ filterDict(scope.row.approvalFlag,APPROVAL_FLAGOptions) }}
            </template>
        </el-table-column>
        <el-table-column align="left" label="审批结果" prop="approvalResult" width="120" />
        <el-table-column align="left" label="删除标志" prop="deleteFlag" width="120">
            <template #default="scope">
            {{ filterDict(scope.row.deleteFlag,DELETE_FLAGOptions) }}
            </template>
        </el-table-column>
        <el-table-column sortable align="left" label="推荐度" prop="finer" width="120" />
        <el-table-column align="left" label="数据资源" prop="dataResource" width="120" />
        <el-table-column align="left" label="附件信息" prop="additionalInformation" width="120" />
        <el-table-column align="left" label="协议类型" prop="protocolType" width="120" />
        <el-table-column align="left" label="产品名称" prop="productName" width="120" />
        <el-table-column align="left" label="产品公司" prop="productCompany" width="120" />
        <el-table-column align="left" label="上行代码" prop="uplinkScript" width="120" />
        <el-table-column align="left" label="下行代码" prop="downlinkScript" width="120" />
        <el-table-column align="left" label="按钮组">
            <template #default="scope">
            <el-button type="primary" link icon="edit" size="small" class="table-button" @click="updateTProtocolScriptFunc(scope.row)">变更</el-button>
            <el-button type="primary" link icon="delete" size="small" @click="deleteRow(scope.row)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <div class="gva-pagination">
            <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            />
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="弹窗操作">
      <el-form :model="formData" label-position="right" ref="elFormRef" :rules="rule" label-width="80px">
        <el-form-item label="用户id:"  prop="userId" >
          <el-input v-model.number="formData.userId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="脚本名称:"  prop="scriptName" >
          <el-input v-model="formData.scriptName" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="脚本描述:"  prop="scriptDescribe" >
          <el-input v-model="formData.scriptDescribe" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="版本号:"  prop="versionNumber" >
          <el-input v-model="formData.versionNumber" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="作者:"  prop="scriptAuthor" >
          <el-input v-model="formData.scriptAuthor" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="富文本:"  prop="richText" >
          <el-input v-model="formData.richText" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="介绍文本:"  prop="explainText" >
          <el-input v-model="formData.explainText" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="点击数:"  prop="hits" >
          <el-input v-model.number="formData.hits" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="审批标志:"  prop="approvalFlag" >
          <el-select v-model="formData.approvalFlag" placeholder="请选择" style="width:100%" :clearable="true" >
            <el-option v-for="(item,key) in APPROVAL_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="审批结果:"  prop="approvalResult" >
          <el-input v-model="formData.approvalResult" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="删除标志:"  prop="deleteFlag" >
          <el-select v-model="formData.deleteFlag" placeholder="请选择" style="width:100%" :clearable="true" >
            <el-option v-for="(item,key) in DELETE_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="推荐度:"  prop="finer" >
          <el-input v-model.number="formData.finer" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="数据资源:"  prop="dataResource" >
          <el-input v-model="formData.dataResource" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="附件信息:"  prop="additionalInformation" >
          <el-input v-model="formData.additionalInformation" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="协议类型:"  prop="protocolType" >
          <el-input v-model="formData.protocolType" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="产品名称:"  prop="productName" >
          <el-input v-model="formData.productName" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="产品公司:"  prop="productCompany" >
          <el-input v-model="formData.productCompany" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="上行代码:"  prop="uplinkScript" >
          <el-input v-model="formData.uplinkScript" :clearable="true"  placeholder="请输入" />
        </el-form-item>
        <el-form-item label="下行代码:"  prop="downlinkScript" >
          <el-input v-model="formData.downlinkScript" :clearable="true"  placeholder="请输入" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TProtocolScript'
}
</script>

<script setup>
import {
  createTProtocolScript,
  deleteTProtocolScript,
  deleteTProtocolScriptByIds,
  updateTProtocolScript,
  findTProtocolScript,
  getTProtocolScriptList
} from '@/api/tProtocolScript'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

// 自动化生成的字典（可能为空）以及字段
const APPROVAL_FLAGOptions = ref([])
const DELETE_FLAGOptions = ref([])
const formData = ref({
        userId: 0,
        scriptName: '',
        scriptDescribe: '',
        versionNumber: '',
        scriptAuthor: '',
        richText: '',
        explainText: '',
        hits: 0,
        approvalFlag: undefined,
        approvalResult: '',
        deleteFlag: undefined,
        finer: 0,
        dataResource: '',
        additionalInformation: '',
        protocolType: '',
        productName: '',
        productCompany: '',
        uplinkScript: '',
        downlinkScript: '',
        })

// 验证规则
const rule = reactive({
               scriptName : [{
                   required: true,
                   message: '请输入插件名称',
                   trigger: ['input','blur'],
               }],
               protocolType : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()


// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})

// 重置
const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

// 搜索
const onSubmit = () => {
  page.value = 1
  pageSize.value = 10
  getTableData()
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getTProtocolScriptList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () =>{
    APPROVAL_FLAGOptions.value = await getDictFunc('APPROVAL_FLAG')
    DELETE_FLAGOptions.value = await getDictFunc('DELETE_FLAG')
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
    ElMessageBox.confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            deleteTProtocolScriptFunc(row)
        })
    }


// 批量删除控制标记
const deleteVisible = ref(false)

// 多选删除
const onDelete = async() => {
      const ids = []
      if (multipleSelection.value.length === 0) {
        ElMessage({
          type: 'warning',
          message: '请选择要删除的数据'
        })
        return
      }
      multipleSelection.value &&
        multipleSelection.value.map(item => {
          ids.push(item.ID)
        })
      const res = await deleteTProtocolScriptByIds({ ids })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        if (tableData.value.length === ids.length && page.value > 1) {
          page.value--
        }
        deleteVisible.value = false
        getTableData()
      }
    }

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateTProtocolScriptFunc = async(row) => {
    const res = await findTProtocolScript({ ID: row.ID })
    type.value = 'update'
    if (res.code === 0) {
        formData.value = res.data.reProtocolScript
        dialogFormVisible.value = true
    }
}


// 删除行
const deleteTProtocolScriptFunc = async (row) => {
    const res = await deleteTProtocolScript({ ID: row.ID })
    if (res.code === 0) {
        ElMessage({
                type: 'success',
                message: '删除成功'
            })
            if (tableData.value.length === 1 && page.value > 1) {
            page.value--
        }
        getTableData()
    }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
    type.value = 'create'
    dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
    dialogFormVisible.value = false
    formData.value = {
        userId: 0,
        scriptName: '',
        scriptDescribe: '',
        versionNumber: '',
        scriptAuthor: '',
        richText: '',
        explainText: '',
        hits: 0,
        approvalFlag: undefined,
        approvalResult: '',
        deleteFlag: undefined,
        finer: 0,
        dataResource: '',
        additionalInformation: '',
        protocolType: '',
        productName: '',
        productCompany: '',
        uplinkScript: '',
        downlinkScript: '',
        }
}
// 弹窗确定
const enterDialog = async () => {
     elFormRef.value?.validate( async (valid) => {
             if (!valid) return
              let res
              switch (type.value) {
                case 'create':
                  res = await createTProtocolScript(formData.value)
                  break
                case 'update':
                  res = await updateTProtocolScript(formData.value)
                  break
                default:
                  res = await createTProtocolScript(formData.value)
                  break
              }
              if (res.code === 0) {
                ElMessage({
                  type: 'success',
                  message: '创建/更改成功'
                })
                closeDialog()
                getTableData()
              }
      })
}
</script>

<style>
</style>

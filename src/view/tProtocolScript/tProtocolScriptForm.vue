<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="用户id:" prop="userId">
          <el-input v-model.number="formData.userId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="脚本名称:" prop="scriptName">
          <el-input v-model="formData.scriptName" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="脚本描述:" prop="scriptDescribe">
          <el-input v-model="formData.scriptDescribe" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="版本号:" prop="versionNumber">
          <el-input v-model="formData.versionNumber" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="作者:" prop="scriptAuthor">
          <el-input v-model="formData.scriptAuthor" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="富文本:" prop="richText">
          <el-input v-model="formData.richText" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="介绍文本:" prop="explainText">
          <el-input v-model="formData.explainText" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="点击数:" prop="hits">
          <el-input v-model.number="formData.hits" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="审批标志:" prop="approvalFlag">
          <el-select v-model="formData.approvalFlag" placeholder="请选择" :clearable="true">
            <el-option v-for="(item,key) in APPROVAL_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="审批结果:" prop="approvalResult">
          <el-input v-model="formData.approvalResult" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="删除标志:" prop="deleteFlag">
          <el-select v-model="formData.deleteFlag" placeholder="请选择" :clearable="true">
            <el-option v-for="(item,key) in DELETE_FLAGOptions" :key="key" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="推荐度:" prop="finer">
          <el-input v-model.number="formData.finer" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="数据资源:" prop="dataResource">
          <el-input v-model="formData.dataResource" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="附件信息:" prop="additionalInformation">
          <el-input v-model="formData.additionalInformation" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="协议类型:" prop="protocolType">
          <el-input v-model="formData.protocolType" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="产品名称:" prop="productName">
          <el-input v-model="formData.productName" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="产品公司:" prop="productCompany">
          <el-input v-model="formData.productCompany" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="上行代码:" prop="uplinkScript">
          <el-input v-model="formData.uplinkScript" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="下行代码:" prop="downlinkScript">
          <el-input v-model="formData.downlinkScript" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="save">保存</el-button>
          <el-button size="small" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
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
  updateTProtocolScript,
  findTProtocolScript
} from '@/api/tProtocolScript'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
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

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findTProtocolScript({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reProtocolScript
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
    APPROVAL_FLAGOptions.value = await getDictFunc('APPROVAL_FLAG')
    DELETE_FLAGOptions.value = await getDictFunc('DELETE_FLAG')
}

init()
// 保存按钮
const save = async() => {
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
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>

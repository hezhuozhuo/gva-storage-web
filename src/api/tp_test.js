import service from '@/utils/request'

// @Tags TpTest
// @Summary 创建TpTest
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TpTest true "创建TpTest"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /test/createTpTest [post]
export const createTpTest = (data) => {
  return service({
    url: '/test/createTpTest',
    method: 'post',
    data
  })
}

// @Tags TpTest
// @Summary 删除TpTest
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TpTest true "删除TpTest"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /test/deleteTpTest [delete]
export const deleteTpTest = (data) => {
  return service({
    url: '/test/deleteTpTest',
    method: 'delete',
    data
  })
}

// @Tags TpTest
// @Summary 删除TpTest
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除TpTest"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /test/deleteTpTest [delete]
export const deleteTpTestByIds = (data) => {
  return service({
    url: '/test/deleteTpTestByIds',
    method: 'delete',
    data
  })
}

// @Tags TpTest
// @Summary 更新TpTest
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TpTest true "更新TpTest"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /test/updateTpTest [put]
export const updateTpTest = (data) => {
  return service({
    url: '/test/updateTpTest',
    method: 'put',
    data
  })
}

// @Tags TpTest
// @Summary 用id查询TpTest
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.TpTest true "用id查询TpTest"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /test/findTpTest [get]
export const findTpTest = (params) => {
  return service({
    url: '/test/findTpTest',
    method: 'get',
    params
  })
}

// @Tags TpTest
// @Summary 分页获取TpTest列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取TpTest列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /test/getTpTestList [get]
export const getTpTestList = (params) => {
  return service({
    url: '/test/getTpTestList',
    method: 'get',
    params
  })
}

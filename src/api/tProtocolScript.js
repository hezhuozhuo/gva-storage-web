import service from '@/utils/request'

// @Tags TProtocolScript
// @Summary 创建TProtocolScript
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TProtocolScript true "创建TProtocolScript"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /ProtocolScript/createTProtocolScript [post]
export const createTProtocolScript = (data) => {
  return service({
    url: '/ProtocolScript/createTProtocolScript',
    method: 'post',
    data
  })
}

// @Tags TProtocolScript
// @Summary 删除TProtocolScript
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TProtocolScript true "删除TProtocolScript"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /ProtocolScript/deleteTProtocolScript [delete]
export const deleteTProtocolScript = (data) => {
  return service({
    url: '/ProtocolScript/deleteTProtocolScript',
    method: 'delete',
    data
  })
}

// @Tags TProtocolScript
// @Summary 删除TProtocolScript
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除TProtocolScript"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /ProtocolScript/deleteTProtocolScript [delete]
export const deleteTProtocolScriptByIds = (data) => {
  return service({
    url: '/ProtocolScript/deleteTProtocolScriptByIds',
    method: 'delete',
    data
  })
}

// @Tags TProtocolScript
// @Summary 更新TProtocolScript
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TProtocolScript true "更新TProtocolScript"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /ProtocolScript/updateTProtocolScript [put]
export const updateTProtocolScript = (data) => {
  return service({
    url: '/ProtocolScript/updateTProtocolScript',
    method: 'put',
    data
  })
}

// @Tags TProtocolScript
// @Summary 用id查询TProtocolScript
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.TProtocolScript true "用id查询TProtocolScript"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /ProtocolScript/findTProtocolScript [get]
export const findTProtocolScript = (params) => {
  return service({
    url: '/ProtocolScript/findTProtocolScript',
    method: 'get',
    params
  })
}

// @Tags TProtocolScript
// @Summary 分页获取TProtocolScript列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取TProtocolScript列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /ProtocolScript/getTProtocolScriptList [get]
export const getTProtocolScriptList = (params) => {
  return service({
    url: '/ProtocolScript/getTProtocolScriptList',
    method: 'get',
    params
  })
}

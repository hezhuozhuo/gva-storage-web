import service from '@/utils/request'

// @Tags TPluginDevice
// @Summary 创建TPluginDevice
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TPluginDevice true "创建TPluginDevice"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /PluginDevice/createTPluginDevice [post]
export const createTPluginDevice = (data) => {
  return service({
    url: '/PluginDevice/createTPluginDevice',
    method: 'post',
    data
  })
}

// @Tags TPluginDevice
// @Summary 删除TPluginDevice
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TPluginDevice true "删除TPluginDevice"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /PluginDevice/deleteTPluginDevice [delete]
export const deleteTPluginDevice = (data) => {
  return service({
    url: '/PluginDevice/deleteTPluginDevice',
    method: 'delete',
    data
  })
}

// @Tags TPluginDevice
// @Summary 删除TPluginDevice
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除TPluginDevice"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /PluginDevice/deleteTPluginDevice [delete]
export const deleteTPluginDeviceByIds = (data) => {
  return service({
    url: '/PluginDevice/deleteTPluginDeviceByIds',
    method: 'delete',
    data
  })
}

// @Tags TPluginDevice
// @Summary 更新TPluginDevice
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TPluginDevice true "更新TPluginDevice"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /PluginDevice/updateTPluginDevice [put]
export const updateTPluginDevice = (data) => {
  return service({
    url: '/PluginDevice/updateTPluginDevice',
    method: 'put',
    data
  })
}

// @Tags TPluginDevice
// @Summary 用id查询TPluginDevice
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.TPluginDevice true "用id查询TPluginDevice"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /PluginDevice/findTPluginDevice [get]
export const findTPluginDevice = (params) => {
  return service({
    url: '/PluginDevice/findTPluginDevice',
    method: 'get',
    params
  })
}

// @Tags TPluginDevice
// @Summary 分页获取TPluginDevice列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取TPluginDevice列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /PluginDevice/getTPluginDeviceList [get]
export const getTPluginDeviceList = (params) => {
  return service({
    url: '/PluginDevice/getTPluginDeviceList',
    method: 'get',
    params
  })
}

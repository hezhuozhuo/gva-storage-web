import service from '@/utils/request'

// @Tags TRuleEngine
// @Summary 创建TRuleEngine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TRuleEngine true "创建TRuleEngine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /RuleEngine/createTRuleEngine [post]
export const createTRuleEngine = (data) => {
  return service({
    url: '/RuleEngine/createTRuleEngine',
    method: 'post',
    data
  })
}

// @Tags TRuleEngine
// @Summary 删除TRuleEngine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TRuleEngine true "删除TRuleEngine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /RuleEngine/deleteTRuleEngine [delete]
export const deleteTRuleEngine = (data) => {
  return service({
    url: '/RuleEngine/deleteTRuleEngine',
    method: 'delete',
    data
  })
}

// @Tags TRuleEngine
// @Summary 删除TRuleEngine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除TRuleEngine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /RuleEngine/deleteTRuleEngine [delete]
export const deleteTRuleEngineByIds = (data) => {
  return service({
    url: '/RuleEngine/deleteTRuleEngineByIds',
    method: 'delete',
    data
  })
}

// @Tags TRuleEngine
// @Summary 更新TRuleEngine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.TRuleEngine true "更新TRuleEngine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /RuleEngine/updateTRuleEngine [put]
export const updateTRuleEngine = (data) => {
  return service({
    url: '/RuleEngine/updateTRuleEngine',
    method: 'put',
    data
  })
}

// @Tags TRuleEngine
// @Summary 用id查询TRuleEngine
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.TRuleEngine true "用id查询TRuleEngine"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /RuleEngine/findTRuleEngine [get]
export const findTRuleEngine = (params) => {
  return service({
    url: '/RuleEngine/findTRuleEngine',
    method: 'get',
    params
  })
}

// @Tags TRuleEngine
// @Summary 分页获取TRuleEngine列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取TRuleEngine列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /RuleEngine/getTRuleEngineList [get]
export const getTRuleEngineList = (params) => {
  return service({
    url: '/RuleEngine/getTRuleEngineList',
    method: 'get',
    params
  })
}

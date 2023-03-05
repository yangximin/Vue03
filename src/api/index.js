import request from './request'
import mockRequest from './mockRequest'

export const reqCategoryList = () => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
}
export const requestBannerList = () => {
    return mockRequest({ url: '/banner', method: 'get' })
}
export const requestFloorList = () => {
    return mockRequest({ url: '/floor', method: 'get' })
}
export const requestSearchInfo = (params) => {
    return request({ url: "/list", method: "post", data: params })
}
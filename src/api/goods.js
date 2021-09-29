import request  from "../utils/request"

export const HomeGoodsInfo = (start,count)=> {
    return request({
        method:"GET",
        url:"/goodsinfo/getAllGoodsInfo",
        params:{
            start,
            count
        }
    })
}
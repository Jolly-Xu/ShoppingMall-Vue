import request  from "../utils/request"

export const order = (userid,goodsid,address)=>{
    return request({
        method:"POST",
        url:"/orderinfo/placeorder",
        data:{
            userid,
            goodsid,
            address,
        }
    })
}
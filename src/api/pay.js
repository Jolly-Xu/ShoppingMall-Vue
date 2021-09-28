import request  from "../utils/request"

export const pay = (orderid)=>{
    return request({
        method:"POST",
        url:"/orderinfo/buy",
        data:{
            orderid
        }
    })
}
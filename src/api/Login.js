import request  from "../utils/request"

export const login = (username,password)=> {
    return request({
        method:"POST",
        url:"/login",
        params:{
            username,
            password
        }
    })
}
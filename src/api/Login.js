import request  from "../utils/request"

export const login = (username,password)=> {
    console.log(username+password);
    return request({
        method:"POST",
        url:"/login",
        params:{
            username,
            password
        }
    })
}
import instance from "../axiosConfig/instance"


export const register=(data)=>{
    return instance.post('/users/signup',data)
}

export const login=(data)=>{
    return instance.post('/users/login',data)
}



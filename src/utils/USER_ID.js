import { v4 as uuidv4 } from 'uuid';
//封装游客id函数
export const SET_USER_ID = () => {
    let userId = localStorage.getItem("USERTEMPID")
    if (!userId) {
        userId = uuidv4()
        localStorage.setItem("USERTEMPID", userId)
    }
    return userId
}
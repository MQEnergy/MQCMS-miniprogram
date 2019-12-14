// 管理账号信息
import { config } from "../config"

const getUsers = () => {
    let ret = uni.getStorageSync(config.usersKey);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = (userInfo) => {
    uni.setStorageSync(config.usersKey, userInfo);
}

const addLoginStatus = (status) => {
    uni.setStorageSync(config.stateKey, status);
}
export default {
    getUsers,
    addUser,
    addLoginStatus
}

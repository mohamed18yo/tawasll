/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import {
    Store
} from "../redux/store";
import {
    LOGOUT_SUCCESS
} from "../redux/user/userTypeConstant";
import {
    useToken
} from "../utils/getToken";

export const BASE_URL = "https://tawsal.net";


const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'X-Requested-With': 'XMLHttpRequest',
        'crossDomain': true,
    },
});




axiosInstance.interceptors.request.use((config) => {
    const user = localStorage.getItem("user") || "";
    const {
        token
    } = (user && (JSON.parse(user))) || {
        token: ""
    };
    if (!token) {
        return config
    }

    config.headers.Authorization = `Bearer ${token}`

    return config;
});

axiosInstance.interceptors.response.use(
    (res) => {
        const user = localStorage.getItem("user") || "";
        const {
            token
        } = (user && (JSON.parse(user))) || {
            token: ""
        };
        if (!token) {
            return res
        }

        res.headers.Authorization = `Bearer ${token}`;
        return res;
    },
    (error) => {
        const status = error.response ? error.response.status : 500;
        // if (status && status === 500) {
        //     localStorage.clear();
        //     Store.dispatch({
        //         type: LOGOUT_SUCCESS
        //     });
        // }
        return Promise.reject(error);
    }
);



class Api {
    static async post(
        pathName,
        data,
        config = {},
    ) {
        return axiosInstance.post(pathName, data, config);
    }

    static async delete(
        pathName,
        config = {},
    ) {
        return axiosInstance.delete(pathName, config);
    }

    static async update(
        pathName,
        data,
        config = {},
    ) {
        return axiosInstance.put(pathName, data, config);
    }

    static async get(
        pathName,
        config = {},
    ) {
        return axiosInstance.get(pathName, config);
    }
}



export default Api;
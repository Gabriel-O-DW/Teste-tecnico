import axios from "axios";

export const API_URL =  'http://127.0.0.1:3000';

export const axiosClient = axios.create({
    baseURL: API_URL,
});

export const axiosClientPagination = axios.create({});
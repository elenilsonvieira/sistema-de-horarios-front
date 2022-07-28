import axios from "axios";

import StorageService from "./auth/StorageService";

export const LOGGED_USER = 'loggeduser';
export const TOKEN = 'token';

export const httpClient = axios.create({
    baseURL: "https://sistema-de-horario.herokuapp.com",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

export default class ApiService {
    endpoint: string;
    storageService: StorageService;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        
        this.storageService = new StorageService();
        const token = this.storageService.getItem(TOKEN);
        this.registerToken(token);
    }

    registerToken(token: any) {
       if(token){
        httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       }
    }
}

import axios from 'axios';

import StorageService from './auth/StorageService';

export const LOGGED_USER = 'LOGGED_USER';
export const TOKEN = 'TOKEN';

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false,
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

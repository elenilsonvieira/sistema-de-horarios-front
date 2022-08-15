import ApiService, {LOGGED_USER, TOKEN, httpClient} from '../axios';
import StorageService from './StorageService';

export default class AuthenticationApiService extends ApiService {
    
    constructor() {
        super('');
        this.storageService = new StorageService();
    }

    async login(username: string, password: string) {
        const loginDTO = {
            "email": username,
            "pass": password
        };

        try {
            const response = await httpClient.post('user/login', loginDTO);

            const user = response.data;
            const token = response.data.token;

            this.storageService.setItem("LOGGED_USER", user);
            this.storageService.setItem("TOKEN", token);

            this.registerToken(token);
            return user;
        } catch (error) {
            return null;
        }
    }

    logout() {
        this.storageService.removeItem(LOGGED_USER);
        this.storageService.removeItem(TOKEN);
        window.location.replace('/');
    }

    getLoggedUser() {
        return this.storageService.getItem(LOGGED_USER);
    }

    getToken() {
        return this.storageService.getItem(TOKEN);
    }

    async isAuthenticated() {
        const user = this.getLoggedUser();
        const token = this.getToken();

        if(!user || !token) {
            return false;
        }

        return true;
    }
    
    async refreshToken() {
        const user = this.getLoggedUser();
        const token = this.getToken();
        
        if(token && user) {
            try {
                const response = await httpClient.post('/user/refreshToken', {
                    token: token,
                    userUuid: user.uuid,
                })
                localStorage.setItem('TOKEN', JSON.parse(response.data));
                return this.registerToken(response.data);
            } catch (error) {
                return false;
            }
        }

    }
}
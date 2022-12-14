import ApiService, {LOGGED_USER, TOKEN, httpClient} from '../axios';
import StorageService from './StorageService';

export default class AuthenticationApiService extends ApiService {
    
    constructor() {
        super('');
        this.storageService = new StorageService();
    }

    async login(enrollment: string, password: string) {
        const loginDTO = {
            "enrollment": enrollment,
            "pass": password
        };

        try {
            const response = await httpClient.post('auth/login', loginDTO);

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
                const response = await httpClient.post('/auth/refreshToken', {
                    token: token,
                    userUuid: user.uuid,
                })
                localStorage.setItem('TOKEN', JSON.stringify(response.data));
                this.registerToken(JSON.stringify(response.data));
                return true;
            } catch (error) {
                return false;
            }
        }

    }
}
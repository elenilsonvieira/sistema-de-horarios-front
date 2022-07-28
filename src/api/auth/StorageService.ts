export default class StorageService {
    
    setItem(key: string, value: string) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string) {
        const item = localStorage.getItem(key);
        if (item) return JSON.parse(item);
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }
}
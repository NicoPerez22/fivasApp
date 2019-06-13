export class User {
    id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    token: string;   


    constructor(user?: User) {
        this.id = user && user.id || '0';
        this.name = user && user.name || '';
        this.username = user && user.username || '';
        this.password = user && user.password || '';
        this.email = user && user.email || '';
        this.token = user && user.token || '';
    }

}
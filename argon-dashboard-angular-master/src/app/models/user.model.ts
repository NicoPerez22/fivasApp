export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    token: string;   


    constructor(user?: User) {
        this.id = user && user.id || '0';
        this.username = user && user.username || '';
        this.password = user && user.password || '';
        this.email = user && user.email || '';
    }

}
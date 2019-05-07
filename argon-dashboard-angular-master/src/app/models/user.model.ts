export class User {
    username: string;
    password: string;
    email: string;   


    constructor(user?: User) {
        this.username = user && user.username || '';
        this.password = user && user.password || '';
        this.email = user && user.email || '';
    }

}
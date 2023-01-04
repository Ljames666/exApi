import { v4 } from 'uuid';
import { IUser } from '../interfaces';

export default class User implements IUser {
    uid: string;

    constructor(public name: string, public email: string, public password: string) {
        this.uid = v4();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

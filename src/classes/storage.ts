import { ITask, IUser } from '../interfaces';

class Storage {
    listUsers: Array<IUser>;
    listTasks: Array<ITask>;

    constructor() {
        this.listUsers = [];
        this.listTasks = [];
    }
}

const apiStorage = new Storage();

export default apiStorage;

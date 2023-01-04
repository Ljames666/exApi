import { v4 } from 'uuid';
import { ITask } from '../interfaces';

export default class Task implements ITask {
    uid: string;

    constructor(public title: string, public detail: string, public userId: string) {
        this.uid = v4();
        this.title = title;
        this.detail = detail;
        this.userId = userId;
    }
}

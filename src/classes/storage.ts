import { ITask, IUser } from '../interfaces';

class Storage {
    private usersList: Array<IUser>;
    private tasksList: Array<ITask>;

    constructor() {
        this.usersList = [];
        this.tasksList = [];
    }

    // methods for users

    addUser(user: IUser): void {
        this.usersList.push(user);
    }

    private findIndexUser(uid: string): number {
        return this.usersList.findIndex((user) => user.uid === uid);
    }

    getUserById(uid: string): IUser | { message: string } {
        const user = this.usersList.find((user) => user.uid === uid);
        if (!user) {
            return { message: 'Account not found' };
        }
        return user;
    }

    updateUser(uid: string, data: Partial<IUser>): { message: string } {
        const index = this.findIndexUser(uid);
        if (index < 0) {
            return { message: 'Account not found' };
        }
        const user = this.usersList[index];

        user.name = data.name ? data.name : user.name;
        user.email = data.email ? data.email : user.email;
        user.password = data.password ? data.password : user.password;

        return { message: 'Successfully update account data' };
    }

    removeUser(uid: string): { message: string } {
        const index = this.findIndexUser(uid);
        if (index < 0) {
            return { message: 'Account not found' };
        }
        this.usersList.splice(index, 1);
        return { message: 'Successfully deleted account' };
    }

    // methods for tasks

    addTasks(task: ITask): void {
        this.tasksList.push(task);
    }

    filterTasksByUser(userId: string): ITask[] {
        return this.tasksList.filter((task) => task.userId === userId);
    }

    updateTaskById(uid: string, data: Partial<ITask>): { message: string } {
        const tasks = this.tasksList;

        const index = tasks.findIndex((task) => task.uid === uid);

        if (index < 0) {
            return { message: 'Task not found' };
        }

        tasks[index].title = data.title ? data.title : tasks[index].title;
        tasks[index].detail = data.detail ? data.detail : tasks[index].detail;

        return { message: 'Successfully update task' };
    }
    removeUserTaskById(uid: string): { message: string } {
        const index = this.tasksList.findIndex((task) => task.uid === uid);

        if (index < 0) {
            return { message: 'Task not found' };
        }

        this.tasksList.splice(index, 1);

        return { message: 'Successfully delete task' };
    }
}

const apiStorage = new Storage();

export default apiStorage;

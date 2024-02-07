export class TodoList {
    constructor() {
        this.list = [];
    }

    add(todo) {
        this.list.push(todo);
    }

    remove(text) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].text === text) {
                this.list.splice(i, 1);
                break;
            }
        }
    }
    
    showAll() {
        return this.list;
    }

}

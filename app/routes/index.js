import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service('todo-list') todo;

    model() {
        let todo = this.todo;

        return {
            get allTodo() {
                return todo.all;
            }
        }
    }
}

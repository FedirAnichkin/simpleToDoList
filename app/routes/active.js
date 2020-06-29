import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ActiveRoute extends Route {
    @service('todo-list') todo;

    model() {
        let todo = this.todo;

        return {
            get activeTodo() {
                return todo.incomplete;
            }
        }
    }
}

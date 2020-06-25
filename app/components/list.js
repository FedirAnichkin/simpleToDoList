import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ListComponent extends Component {
    @service('todo-list') todo;
}

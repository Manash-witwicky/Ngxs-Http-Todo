import { TodoModel } from './todo.models';
import { FetchTodo } from './todo.actions';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

const initialState: TodoModel = {
  fetchedTodo: [],
};

const url = 'http://localhost:3000/data';

@State<TodoModel>({
  name: 'TodoState',
  defaults: initialState
})

export class TodoState {

  constructor(private _http: HttpClient) {}

  @Selector()
  static load(state: TodoModel) {
    return state.fetchedTodo;
  }

  @Action(FetchTodo)
  fetch({getState, setState}: StateContext<TodoModel>) {
    const state = getState();
    this._http.get(url).subscribe((data) => {
      setState({
        fetchedTodo: data
      });
    });
  }

}

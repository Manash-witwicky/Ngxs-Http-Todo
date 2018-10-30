import { TodoModel } from './todo.models';
import { FetchTodo, RemoveTodo } from './todo.actions';
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
  fetch({getState, patchState}: StateContext<TodoModel>) {
    const state = getState();
    this._http.get(url).subscribe((data) => {
      patchState({
        fetchedTodo: data
      });
    });
  }

  @Action(RemoveTodo)
  remove({getState, patchState}: StateContext<TodoModel>, { payload }: RemoveTodo) {
    const state = getState();
    patchState({
      fetchedTodo: state.fetchedTodo.filter(data => data.id !== payload)
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { TodoState } from './../state/todo.state';
import { FetchTodo, RemoveTodo } from './../state/todo.actions';
import { Store , Select } from '@ngxs/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Select(TodoState.load)
  todo$: Observable<any>;

  constructor(private store: Store) { }

  deletetodo(id) {
    this.store.dispatch(new RemoveTodo(id));
  }

  ngOnInit() {
    this.store.dispatch(new FetchTodo());
  }

}

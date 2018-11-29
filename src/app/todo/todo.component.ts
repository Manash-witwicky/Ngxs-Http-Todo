import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchTodo, RemoveTodo } from './../state/todo.actions';
import { TodoState } from './../state/todo.state';

// Added By Manash
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Select(TodoState.load)
  todo$: Observable<any>;

  constructor(private store: Store) {}

  deletetodo(id) {
    this.store.dispatch(new RemoveTodo(id));
  }

  ngOnInit() {
    this.store.dispatch(new FetchTodo());
  }
}

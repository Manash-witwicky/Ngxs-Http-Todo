import { Component, OnInit } from '@angular/core';
import { TodoState } from './../state/todo.state';
import { FetchTodo } from './../state/todo.actions';
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

  ngOnInit() {
    this.store.dispatch(new FetchTodo());
    console.log('Ng OnInit: ' + JSON.stringify(this.todo$));
  }

}

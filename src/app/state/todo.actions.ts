export class FetchTodo {
  static readonly type = '[TODO] Fetch Todo';
}

export class RemoveTodo {
  static readonly type = '[TODO] Remove Todo';
  constructor(public payload: number) {}
}

class TodoListComponent {

  declare var $: any;
  private $el: JQueryStatic;

  constructor(el: HTMLElement) {
    this.$el = $(el);
  }

  render(todos: Todo[]) {
    this.$el.html('');

    if (!todos.length) {
      this.$el.html(
        "<div class='list-group-item text-center text-giant'>" +
        "  <strong>You've completed everything you needed to do!</strong>" +
        "</div>"
      );

      return;
    }

    for (let todo of todos) {
      this.renderTodo(todo).appendTo(this.$el);
    }
  }

  renderTodo(todo: Todo) {
    return $(
      "<li class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : '') + "'>" +
      "  <div class='form-check'>" +
      "      <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
      "      <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
      "    </div>" +
      "    <div class='d-inline-block'>" +
      "      <span class='incomplete'>" + todo.name + "</span>" +
      "      <span class='completed text-muted'><del>" + todo.name + "</del></span>" +
      "    </div>" +
      "</li>"
    ).on('click', function() {
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
      this.dispatchEvent(event);
    });
  }
}

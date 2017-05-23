var TodoListComponent = (function() {

  function TodoListComponent(el) {
    this.$el = $(el);
  }

  TodoListComponent.prototype.render = function(todos) {

    this.$el.html('');

    if (!todos.length) {
      this.$el.html(
        "<div class='list-group-item text-center text-giant'>" +
        "  <strong>You've completed everything you needed to do!</strong>" +
        "</div>"
      );

      return;
    }

    for(var index in todos) {
      var todo = todos[index];
      renderTodo(todo).appendTo(this.$el);
    }
  }

  <div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>

  function renderTodo(todo) {
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

  return TodoListComponent;
})();

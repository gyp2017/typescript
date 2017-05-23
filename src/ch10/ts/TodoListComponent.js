var TodoListComponent = (function () {
    function TodoListComponent() {
    }
    return TodoListComponent;
}());
$el: JQueryStatic;
constructor(el, HTMLElement);
{
    this.$el = $(el);
}
render(todos, Todo[]);
{
    this.$el.html('');
    if (!todos.length) {
        this.$el.html("<div class='list-group-item text-center text-giant'>" +
            "  <strong>You've completed everything you needed to do!</strong>" +
            "</div>");
        return;
    }
    for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
        var todo = todos_1[_i];
        this.renderTodo(todo).appendTo(this.$el);
    }
}
renderTodo(todo, Todo);
{
    return $("<li class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : '') + "'>" +
        "  <div class='form-check'>" +
        "      <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
        "      <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
        "    </div>" +
        "    <div class='d-inline-block'>" +
        "      <span class='incomplete'>" + todo.name + "</span>" +
        "      <span class='completed text-muted'><del>" + todo.name + "</del></span>" +
        "    </div>" +
        "</li>").on('click', function () {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
        this.dispatchEvent(event);
    });
}

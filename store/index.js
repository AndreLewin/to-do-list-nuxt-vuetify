export const state = () => ({
  todos: [
    {
      id: 1,
      text: 'A simple task',
      isDone: false
    },
    {
      id: 2,
      text: 'An usual task',
      isDone: false
    },
    {
      id: 3,
      text: 'A rather difficult task',
      isDone: false
    }
  ],
  // used as an unique id for each todo
  todoNumber: 3
});

export const mutations = {
  SET_TODOS: function (state, newTodos) {
    state.todos = newTodos;
  },
  INCREMENT_TODONUMBER: function (state) {
    state.todoNumber++;
  }
};

export const actions = {
  async createTodo ({commit, state}, newTodoText) {
    commit('INCREMENT_TODONUMBER');
    const newTodo = {
      id: state.todoNumber,
      text: newTodoText,
      isDone: false
    }
    const oldTodos = state.todos;
    const newTodos = [newTodo, ...oldTodos]
    commit('SET_TODOS', newTodos);
  }
};

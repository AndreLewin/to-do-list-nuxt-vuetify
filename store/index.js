export const state = () => ({
  todos: [],
  // used as an unique id for each todo
  todoNumber: 0
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
  },
  async updateTodo ({commit, state}, {todoIdtoUpdate, propertiesToUpdate}) {
    const oldTodos = state.todos;
    const newTodos = oldTodos.map(todo => {
      if (todo.id === todoIdtoUpdate) {
        return {...todo, ...propertiesToUpdate}
      } else {
        return todo;
      }
    });
    commit('SET_TODOS', newTodos);
  },
  async deleteTodo ({commit, state}, todoIdtoDelete) {
    const oldTodos = state.todos;
    const newTodos = oldTodos.filter(todo => todo.id !== todoIdtoDelete);
    commit('SET_TODOS', newTodos);
  },
  async updateTodos ({commit}, newTodos) {
    commit('SET_TODOS', newTodos);
  }
};

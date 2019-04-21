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
  ]
});

export const mutations = {
  SET_TODOS: function (state, newTodos) {
    state.todos = newTodos;
  },
};

export const actions = {
  async createTodo ({commit, state}, newTodo) {
    const oldTodos = state.todos;
    const newTodos = [...oldTodos, newTodo]
    commit('SET_TODOS', newTodos);
  }
};

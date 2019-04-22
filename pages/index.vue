<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-text-field
      v-model="search"
      style="width: 400px"
      placeholder="Search (e.g. simple, #later)"
      append-icon="search"
    />
    <new-todo />
    <draggable
      v-model="todos"
      handle=".handle"
    >
      <transition-group
        name="list-complete"
      >
        <a-todo
          v-for="todo in todos"
          v-show="todo.text.includes(search)"
          :key="todo.id"
          :todo="todo"
        />
      </transition-group>
    </draggable>
  </v-layout>
</template>

<script>
import draggable from 'vuedraggable';
import NewTodo from '~/components/NewTodo';
import ATodo from '~/components/ATodo';

export default {
  components: {
    draggable,
    NewTodo,
    ATodo
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.state.todos;
      },
      // store the change of todos done by vuedraggable
      set (newTodos) {
        this.updateTodos(newTodos)
      }
    }
  },
  methods: {
    async updateTodos (newTodos) {
      this.$store.dispatch('updateTodos', newTodos);
    }
  }
}
</script>

<style scoped>
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>

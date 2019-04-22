<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <new-todo />
    <draggable>
      <transition-group
        name="list-complete"
      >
        <a-todo
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        />
      </transition-group>
    </draggable>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex';
import draggable from 'vuedraggable';
import NewTodo from '~/components/NewTodo';
import ATodo from '~/components/ATodo';

export default {
  components: {
    draggable,
    NewTodo,
    ATodo
  },
  computed: {
    ...mapState([
      'todos'
    ])
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

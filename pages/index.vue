<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <new-todo />
    <v-card
      v-for="todo in todos"
      :key="todo.id"
      width="400"
      class="my-1"
    >
      <v-card-text>
        {{ todo.text }}
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex';
import NewTodo from '~/components/NewTodo';

export default {
  components: {
    NewTodo,
  },
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>

<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <new-todo />
    <transition-group
      name="list-complete"
    >
      <v-card
        v-for="todo in todos"
        :key="todo.id"
        width="400"
        class="my-1"
      >
        <v-layout 
          row
        >
          <v-card-text>
            {{ todo.text }}
          </v-card-text>
          <v-card-actions>
            <v-icon>
              delete
            </v-icon>
          </v-card-actions>
        </v-layout>
      </v-card>
    </transition-group>
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

<style scoped>
  .list-complete-enter {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>

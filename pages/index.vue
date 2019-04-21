<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-text-field
      style="width: 400px"
      placeholder="Add a new to-do…"
    />
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
export default {
  data () {
    return {
      todos: [{
        id: 1,
        text: "A simple task",
        isDone: false
      }, {
        id: 2,
        text: "An usual task",
        isDone: false
      }, {
        id: 3,
        text: "A rather difficult task",
        isDone: false
      }]
    };
  }
}
</script>

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
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState([
      'todos'
    ])
  }
}
</script>

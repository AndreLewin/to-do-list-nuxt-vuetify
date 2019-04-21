<template>
  <v-card
    width="400"
    class="my-1"
  >
    <v-layout 
      row
    >
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-icon>
          delete
        </v-icon>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => {
        return {
          id: '',
          text: '',
          isDone: false
        }
      }
    }
  },
  data () {
    return {
      text: this.todo.text,
      isDone: this.todo.isDone 
    }
  }
}
</script>

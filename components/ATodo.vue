<template>
  <v-card
    width="400"
    class="my-1"
  >
    <v-layout 
      row
    >
      <v-card-actions>
        <v-btn
          icon
        >
          <v-icon>
            done
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          icon
          @click="deleteTodo"
        >
          <v-icon>
            delete
          </v-icon>
        </v-btn>
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
      id: this.todo.id,
      text: this.todo.text,
      isDone: this.todo.isDone 
    }
  },
  methods: {
    async deleteTodo () {
      this.$store.dispatch('deleteTodo', this.id);
    }
  }
}
</script>

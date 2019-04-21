<template>
  <v-card
    width="400"
    class="my-1"
    :color="todo.isDone ? 'success' : ''"
  >
    <v-layout 
      row
    >
      <v-card-actions>
        <v-btn
          icon
          @click="switchIsDoneOfTodo"
        >
          <v-icon>
            {{ todo.isDone ? 'clear' : 'done' }}
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <!-- @blur="text = todo.text" cancels the text edit -->
        <v-text-field
          ref="field"
          v-model="text"
          @blur="text = todo.text"
          @keydown.enter="updateTodoText"
        />
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
      text: this.todo.text
    }
  },
  methods: {
    async deleteTodo () {
      this.$store.dispatch('deleteTodo', this.todo.id);
    },
    async switchIsDoneOfTodo () {
      this.$store.dispatch('updateTodo', {
        todoIdtoUpdate: this.todo.id,
        propertiesToUpdate: {isDone: !this.todo.isDone}
      });
    },
    async updateTodoText () {
      await this.$store.dispatch('updateTodo', {
        todoIdtoUpdate: this.todo.id,
        propertiesToUpdate: {text: this.text}
      });
      // unfocus after update so the user knows the edit has been saved
      this.$refs.field.blur()
    }
  }
}
</script>

<style scoped>
  /* reduce the amount of vertical taken after adding a text field */
  .v-card__text {
    padding: 0px;
  }
</style>
<template>
  <v-card
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
        <v-textarea
          v-model="text"
          auto-grow
          rows="1"
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
        <v-btn
          icon
          @click="updateTodoText(`${text} #important`)"
        >
          <v-icon>
            label_important
          </v-icon>
        </v-btn>
        <v-btn
          icon
          @click="updateTodoText(`${text} #later`)"
        >
          <v-icon>
            watch_later
          </v-icon>
        </v-btn>
        <v-icon
          class="handle cursor-grab"
        >
          drag_indicator
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
  computed: {
    text: {
      get () {
        return this.todo.text;
      },
      set (newText) {
        this.updateTodoText(newText)
      }
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
    async updateTodoText (newText) {
      this.$store.dispatch('updateTodo', {
        todoIdtoUpdate: this.todo.id,
        propertiesToUpdate: {text: newText}
      });
    }
  }
}
</script>

<style scoped>
  /* reduce the amount of vertical taken after adding a text area */
  .v-card__text {
    padding: 0px;
  }
  .cursor-grab {
    cursor: grab;
  }
</style>
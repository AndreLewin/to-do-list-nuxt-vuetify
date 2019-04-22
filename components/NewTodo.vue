<template>
  <v-text-field
    v-model="text"
    placeholder="Add a new to-do…"
    append-icon="add"
    @keydown.enter="createTodo"
  />
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async createTodo () {
      if (this.text !== '') {
        this.$store.dispatch('createTodo', this.text);
        this.text = '';
      }
    }
  }
}
</script>

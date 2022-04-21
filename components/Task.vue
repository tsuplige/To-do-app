<template>
  <div :class="`${task.done ? 'is-complete' : ''}`">
    <div class="content">
      <div @click="toggleDone"  :class="`${task.done ? 'is-complete-checker_border' : 'checker_border'}`">
        <div :class="`${task.done ? 'is-complete-checker_in' : 'checker_in'}`"></div>
      </div>
      <p class="text-content">{{ task.content }}</p>
      <div class="delete">
        <svg @click="removeTask" class="croix" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    toggleDone(task) {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask(task) {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },
};
</script>

<style></style>

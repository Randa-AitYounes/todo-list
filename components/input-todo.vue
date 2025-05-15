<template>
  <UInput v-model="newTask" placeholder="Nouvelle tâche" class="mr-2" />
  <UButton @click="addTodo">Ajouter</UButton>
</template>

<script setup>
const emit = defineEmits(['add']);
const newTask = ref('');
const addTodo = () => {
  if (newTask.value.trim()) {
    emit('add', newTask.value.trim());
    newTask.value = '';
  }
};
</script>
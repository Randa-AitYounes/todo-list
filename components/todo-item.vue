<template>
  <li class="flex items-center gap-2">
    <input type="checkbox" v-model="todo.completed" @change="$emit('toggle', todo)" />
    <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.title }}</span>
    <UButton color="red" size="xs" @click="$emit('delete', todo.id)">Supprimer</UButton>
  </li>
</template>

<script setup>
defineProps({ todo: Object });
</script>
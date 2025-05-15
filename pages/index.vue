<template>
  <div class="p-4 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Mes Tâches</h1>
    <InputTodo @add="addTodo" />
    <ul class="mt-4 space-y-2">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="toggleTodo" @delete="deleteTodo" />
    </ul>
   
  </div>
</template>

<script setup>


const todos = ref([]);
const supabase = useSupabaseClient()


const fetchTodos = async () => {
  const { data } = await supabase.from('todos').select('title');
  todos.value = data || [];
};

const addTodo = async (title) => {
  const { data } = await supabase.from('todos').insert({ title}).select();
  if (data) todos.value.unshift(data[0]);
};

const toggleTodo = async (todo) => {
  await supabase.from('todos').update({ completed: todo.completed }).eq('id', todo.id);
};

const deleteTodo = async (id) => {
  await supabase.from('todos').delete().eq('id', id);
  todos.value = todos.value.filter(t => t.id !== id);
};


onMounted(fetchTodos);
</script>
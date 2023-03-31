import { ref } from 'vue';

export const useTodoList = () => {
  const todoListJson = localStorage.todoList;
  const todoListRef = ref([]);
  todoListRef = todoListJson ? JSON.parse(todoListJson) : [];
  const todo = todoListRef.value.find((todo) => todo.id === id);
  const idx = todoListRef.value.findIndex((todo) => todo.id === id);

  return { todo, idx };
};

<script setup lang="ts">
import { ref } from 'vue';
import { ToDoItem } from '@/types';

function createNewItem(): ToDoItem {
  return {
    id: -1,
    completed: false,
    title: '',
    sortOrder: -1,
    createDate: new Date(),
    editItem: false
  };
}


const newItem = ref<ToDoItem>(createNewItem());
const emits = defineEmits<{
  (e: 'addItem', item: ToDoItem): void;
}>();

function addItem() {
  if (newItem.value.completed) {
    newItem.value.completedDate = new Date();
  }
  newItem.value.createDate = new Date();
  newItem.value.id = newItem.value.createDate.getTime();

  emits('addItem', newItem.value);
  newItem.value = createNewItem();
}

</script>

<template>
  <tfoot>
    <tr>
      <td class="text-center"><input type="checkbox" v-model="newItem.completed" /></td>
      <td class="text-left"></td>
      <td class="text-left">
        <input type="text" placeholder="What needs to be done?" v-model="newItem.title" @keypress.enter="addItem()" />
      </td>
      <td class="text-left"><button @click="addItem()">Add</button></td>
    </tr>
  </tfoot>
</template>
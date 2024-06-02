<script setup lang="ts">
import { ref, watch } from 'vue';
import { ToDoItem } from './types';

function createNewItem(): ToDoItem {
  return {
    id: -1,
    completed: false,
    title: '',
    sortOrder: -1,
    createDate: new Date(),
    editItem: false,
  };
}

const items = ref<ToDoItem[]>([]);
const newItem = ref<ToDoItem>(createNewItem());

function addItem() {
  newItem.value.createDate = new Date();
  newItem.value.id = newItem.value.createDate.getTime();

  // Find the maximum sortOrder value in the items array
  const maxSortOrder = Math.max(...items.value.map(item => item.sortOrder));

  // Set the sortOrder for newItem to the maximum sortOrder + 10
  newItem.value.sortOrder = maxSortOrder + 10;
  items.value.push(newItem.value);
  watchCompleted(items.value[items.value.length - 1]);
  newItem.value = createNewItem();
}

function deleteItem(item: ToDoItem) {
  items.value = items.value.filter(i => i.id !== item.id);
}

function moveItemUp(item: ToDoItem) {
  const index = items.value.indexOf(item);
  if (index > 0) {
    items.value.splice(index, 1);
    items.value.splice(index - 1, 0, item);
  }
}

function moveItemDown(item: ToDoItem) {
  const index = items.value.indexOf(item);
  if (index < items.value.length - 1) {
    items.value.splice(index, 1);
    items.value.splice(index + 1, 0, item);
  }
}

function updateCompletedDate(item: ToDoItem, newValue: boolean) {
  if (newValue === true) {
    item.completedDate = new Date();
  } else {
    item.completedDate = undefined;
  }
}

const watchCompleted = (item: ToDoItem) => {
  watch(
    () => item.completed,
    (newVal) => updateCompletedDate(item, newVal)
  );
};

</script>

<template>
  <header>
    <h1>To Do List</h1>
  </header>

  <main>
    <table>
      <thead>
        <tr>
          <th>Complete?</th>
          <th>#</th>
          <th class="text-left">Title</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td><input type="checkbox" v-model="item.completed"></td>
          <td :class="[{ 'text-line-through': item.completed }]">{{ item.id }}</td>
          <td :class="['text-left', { 'text-line-through': item.completed }]"
            :title="'Created Date: ' + item.createDate.toLocaleString() + (item.completedDate ? '\nCompleted Date: ' + item.completedDate?.toLocaleString() : '')">
            <span v-if="!item.editItem" @click="item.editItem = true"> {{ item.title }} </span>
            <span v-else><input type="text" v-model="item.title" @blur="item.editItem = false"
                @keyup.enter="item.editItem = false"></span>
          </td>
          <td class="text-left">
            <button @click="deleteItem(item)">Delete</button>
            <button :disabled="index >= items.length - 1" @click="moveItemDown(item)">Down</button>
            <button :disabled="index <= 0" @click="moveItemUp(item)">Up</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-center"><input type="checkbox" v-model="newItem.completed"></td>
          <td class="text-left">
          </td>
          <td class="text-left">
            <input type="text" placeholder="What needs to be done?" v-model="newItem.title" @keypress.enter="addItem()">
          </td>
          <td class="text-left"><button @click="addItem()">Add</button></td>
        </tr>
      </tfoot>
    </table>
  </main>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 15px;
}

@media (max-width: 1024px) {
  main table {
    width: 100%;
    max-width: 840px;
  }
}

@media (min-width: 1024px) {
  main table {
    width: 840px;
  }
}

main table button {
  width: 60px;
  padding: 1px;
  margin: 1px 2px;
}

main table td,
main table th {
  text-align: center;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-line-through {
  text-decoration: line-through;
}
</style>

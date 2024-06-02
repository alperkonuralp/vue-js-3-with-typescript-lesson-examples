<script setup lang="ts">
import { ref, watch } from 'vue';
import { ToDoItem } from './types';
import ListItem from './components/ListItem.vue';
import AddListItem from './components/AddListItem.vue';


const items = ref<ToDoItem[]>([]);

function addItem(item: ToDoItem) {
  // Find the maximum sortOrder value in the items array
  const maxSortOrder = Math.max(...items.value.map((i: ToDoItem) => i.sortOrder));

  // Set the sortOrder for newItem to the maximum sortOrder + 10
  item.sortOrder = maxSortOrder + 10;
  items.value.push(item);
  watchCompleted(items.value[items.value.length - 1]);
}

function deleteItem(item: ToDoItem) {
  items.value = items.value.filter((i) => i.id !== item.id);
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
        <template v-for="(item, index) in items" :key="item.id">
          <ListItem v-model="items[index]" :items="items" :index="index" @deleteItem="deleteItem"
            @moveItemUp="moveItemUp" @moveItemDown="moveItemDown"></ListItem>
        </template>
      </tbody>
      <AddListItem @addItem="addItem" />
    </table>
  </main>
</template>

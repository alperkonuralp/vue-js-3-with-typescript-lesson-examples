<script setup lang="ts">
import { ToDoItem } from '@/types'
import { ref } from 'vue'

const item = defineModel<ToDoItem>()
const props = defineProps<{
  items: ToDoItem[]
  index: number
}>()

const editItem = ref(false)

const emits = defineEmits<{
  (e: 'deleteItem', item: ToDoItem): void
  (e: 'moveItemUp', item: ToDoItem): void
  (e: 'moveItemDown', item: ToDoItem): void
}>()
</script>

<template>
  <tr>
    <td><input type="checkbox" v-model="item.completed" /></td>
    <td :class="[{ 'text-line-through': item.completed }]">{{ item.id }}</td>
    <td
      :class="['text-left', { 'text-line-through': item.completed }]"
      :title="
        'Created Date: ' +
        item.createDate.toLocaleString() +
        (item.completedDate ? '\nCompleted Date: ' + item.completedDate?.toLocaleString() : '')
      "
    >
      <span v-if="!editItem" @click="editItem = true"> {{ item.title }} </span>
      <span v-else
        ><input
          type="text"
          v-model="item.title"
          @blur="editItem = false"
          @keyup.enter="editItem = false"
      /></span>
    </td>
    <td class="text-left">
      <button @click="emits('deleteItem', item)">Delete</button>
      <button
        :disabled="props.index >= props.items.length - 1"
        @click="emits('moveItemDown', item)"
      >
        Down
      </button>
      <button :disabled="props.index <= 0" @click="emits('moveItemUp', item)">Up</button>
    </td>
  </tr>
</template>

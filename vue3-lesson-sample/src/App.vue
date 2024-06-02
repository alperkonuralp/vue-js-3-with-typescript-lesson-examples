<script setup lang="ts">

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
          <th class="text-left">Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center"><input type="checkbox"></td>
          <td class="text-left">Walk the dog</td>
          <td class="text-center"><button>Delete</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-center"><input type="checkbox"></td>
          <td class="text-left">
            <input type="text" placeholder="What needs to be done?">
          </td>
          <td class="text-center"><button>Add</button></td>
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

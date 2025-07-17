<script setup>
import { reactive } from "vue";
import HabitlistItem from "./HabitlistItem.vue";

const habitList = reactive([
  {
    name: "Бег",
    description: "Бег в 8:00",
    frequency: 1,
    count: 365,
  },
  {
    name: "Бег",
    description: "Бег в 9:00",
    frequency: 1,
    count: 365,
  },
  {
    name: "Бег",
    description: "Бег в 10:00",
    frequency: 1,
    count: 365,
  },
]);

const deleteHandler = (idx) => {
  habitList.splice(idx, 1);
};
</script>

<template>
 <ul class="list"> 
    <h2 class="list-item">Список привычек:</h2>
    <HabitlistItem v-for="(item, idx) in habitList"
    :item="item"
    :key="idx" 
    class="list-item">
      <template #action>
        <button @click="deleteHandler(idx)" class="delBtn">Удалить</button>
        <button @click="$emit('select:habit', item)" class="delBtn">Изменить</button>
      </template>
    </HabitlistItem> 
  </ul>
</template>

<style>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  align-items: auto;
}
.list-item {

  min-width: 50%;
  background-color: white;
  border-radius: 1rem;
  padding: 10px;
}
.list-item:hover {
  background-color: rgb(248, 243, 243);
}

.delBtn{
  max-width: 100px;
  
}

h2{
  margin: 0;
}
</style>

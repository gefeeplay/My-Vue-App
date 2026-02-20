<script setup>
import {ref} from 'vue';
import HabitForm from "./components/HabitForm.vue";
import HabitList from "./components/HabitList.vue";

const currentHabit = ref({})
const selectHandler = (ev) => {
  currentHabit.value = {...ev};
}

</script>

<template>
  <HabitForm v-model="currentHabit"></HabitForm>
  <HabitList @select:habit="selectHandler"></HabitList>
</template>

<style scoped></style>

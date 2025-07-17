<script setup>
import {computed, reactive, ref, watch} from 'vue'
const habit = defineModel({});
const sum = computed(() => habit.value.frequency * habit.value.count);
const label = ref();
/*
watch(() => {
    return {name: habit.name, description: habit.description}
}, (newValue) => { 
    label.value = `${newValue?.name} ${newValue?.description}`
})*/
</script>

<template>
      <div class="container">
        <form onsubmit="sumbitButton()">
            <h1>Редактирование привычки</h1>
            {{ label }}
            <div class="form-group">
                <label for="habitName">Название привычки</label>
                <input v-model.trim="habit.name" id="habitName" name="habitName" required>
            </div>
        </br>
            <div>
                <label for="descryption">Описание привыки
                </label>
                <textarea v-model.trim="habit.description" id="descryption"></textarea>
            </div>
        </br>    
            <div><label for="frequency">Частота выполнения
                </label>
                <select v-model="habit.frequency" id="frequency">
                    <option value="1">Каждый день</option>
                    <option value="7">Каждую неделю</option>
                    <option value="30">Каждый месяц</option>
                </select>
            </div>
        </br>            
            <div>
                <label for="count">Количество повторений</label>
                <input v-model.number="habit.count" id="count" type="number"></input>
            </div>
        </br>    
            <div id="SumElement">Общее количество выполнения: <span id="sum">{{ sum }}</span></div>
            </br>
            <button type="submit">Сохранить</button>
        </form>
    </div>
</template>


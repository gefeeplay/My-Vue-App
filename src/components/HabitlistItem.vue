<script setup>
import { defineProps } from 'vue';
    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })
</script>
<template>
    <li>
      <div style="font-weight: 700">Название: {{ item.name }}</div>
      <div>Описание: {{ item.description }}</div>
      <div> Частота выполнения:
        <template v-if="item.frequency === 1">Каждый день</template>
        <template v-if="item.frequency === 7">Раз в неделю</template>
        <template v-if="item.frequency === 30">Раз в месяц</template>
      </div>
      <slot name="action"></slot>
    </li>
</template>
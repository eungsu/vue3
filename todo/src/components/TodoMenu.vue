<template>
<div class="row mb-3">
    <div class="col">
        <div class="border px-3 p-2">
            <strong>{{ filterLabel }}</strong>
            <div class="button-group float-end">
                <button class="btn btn-sm dropdown-toggle border-0" 
                    type="button" 
                    data-bs-toggle="dropdown">필터 리스트</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li v-for="key in Object.keys(filters)" :key="key">
                        <a class="dropdown-item" @click="filterKey = key">{{ filters[key].label }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { inject, watch, computed, ref } from 'vue';

const emit = defineEmits(['change-filter']);
const filters = inject('filters');
const filterKey = ref(0);
const filterLabel = computed(() => filters[filterKey.value].label);

watch(() => filterKey.value, filterKey => emit('change-filter', filterKey))
</script>

<style scoped>
</style>
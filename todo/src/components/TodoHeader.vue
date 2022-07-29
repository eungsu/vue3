<template>
    <div class="row mb-3">
        <div class="col">
            <h1 class="bg-dark text-light fs-4 p-3">나의 할일 <span class="badge text-bg-success float-end">{{ today }}</span></h1>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const today = inject("today")
</script>
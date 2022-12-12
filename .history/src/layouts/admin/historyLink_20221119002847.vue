<template>
    <div class="mt-3 ml-2 grid grid-flow-col justify-start gap-2">
        <a v-for ="n of 5" href="" class="bg-white border-2 px-4 py-2 rounded-md cursor-pointer text-sm">编辑器
            <i class="fas fa-xmark ml-2"></i>
        </a>
     </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref<{title:string}[]>()
</script>

<style lang="scss" scoped>
    
</style>
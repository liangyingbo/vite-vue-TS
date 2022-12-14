<template>
    <div>
        <ToastEditor v-model="content" :heigth="300" placeholder="请输入markdown内容"></ToastEditor>
        {{content}}
    </div>
</template>

<script lang="ts" setup>
import ToastEditor from '@/components/markdown/toastEditor.vue';
import { ref } from 'vue';
const content = ref('')

</script>
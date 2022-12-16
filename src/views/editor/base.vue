<template>
  <div>
    <WangEditor :height='500' v-model="content"/>
    {{content}}
  </div>
</template>

<script lang="ts" setup>
import WangEditor from "@/components/wangEditor/wangEditor.vue";
import { ref } from "vue";

const content = ref('')
</script>

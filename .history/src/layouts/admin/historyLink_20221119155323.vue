<template>
  <div>
    <div class="mt-3 ml-2 grid grid-flow-col justify-start gap-2">
    <a
      v-for="(l,index) of list"
      :key="index"
      href=""
      class="bg-white border-2 px-4 py-2 rounded-md cursor-pointer text-sm"
      >{{l.title}}
      <i class="fas fa-xmark ml-2"></i>
    </a>
  </div>
  </div>
 
</template>

<script lang="ts" setup>
import { ref } from "vue";

const list = ref<{ title: string }[]>([
  {
    title: "点单管理",
  },
  {
    title: "商品管理",
  },
  {
    title: "地址信息",
  },
  {
    title: "账户余额",
  },
  {
    title: "点单管理",
  },
  {
    title: "商品管理",
  },
  {
    title: "地址信息",
  },
  {
    title: "账户余额",
  }
]);
</script>

<style lang="scss" scoped></style>

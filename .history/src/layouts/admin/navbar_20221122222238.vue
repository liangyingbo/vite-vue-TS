<template>
  <div class="flex justify-between px-4 py-3 bg-white">
    <el-breadcrumb separator="/" class="flex items-center">
      <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex items-center justify-center relative group">
      <img :src="userRef?.avatar" class="w-10 h-10 rounded-full" />
      <span class="text-sm ml-2">{{userRef?.name}}</span>

      <section
        class="group-hover:block absolute px-2 py-2 top-full whitespace-nowrap cursor-pointer border-2 rounded-md border-gray-500 hidden"
      >
        <div class="flex items-center border-2 b">
          <i class="fab fa-dochub mr-2 text-lg"></i>
          <a class="text-sm text-gray-600">文档资料</a>
        </div>
        <div class="flex items-center">
          <i class="fas fa-house-user mr-2 text-lg"></i>
          <a class="text-sm text-gray-600">网站首页</a>
        </div>
        <div class="flex items-center" @click="utils.user.logout()">
          <i class="fa-sharp fa-solid fa-arrow-right-from-bracket mr-2 text-lg"></i>
          <a class="text-sm text-gray-600">退出</a>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import userStore from '@/store/user';
import utils from '@/utils';
import { ref } from 'vue';

const user = userStore().info
const userRef = ref(user)

</script>

<style lang="scss" scoped></style>

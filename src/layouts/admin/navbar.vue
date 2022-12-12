<template>
  <div class="flex justify-between px-4 py-3 bg-white">
   <div class="flex items-center">
    <div @click="menuService.toggleStateClose()" class="cursor-pointer">
      <i class="fas fa-angles-right mr-3" v-if="menuService.close.value"></i>
      <i class="fas fa-angles-left mr-3" v-else></i>
    </div>
    <Breadcrumb></Breadcrumb>
   </div>
    <div class="flex items-center">
      <Notification class="mr-8"/>
      <i class="fab fa-delicious text-lg mr-8" @click="fullScreen"></i>
      <div class="flex items-center justify-center relative group">
        <img :src="userRef?.avatar" class="w-10 h-10 rounded-full"/>
        <span class="text-sm ml-2">{{userRef?.name}}</span>
        <section class="group-hover:block absolute px-2 py-2 top-full whitespace-nowrap cursor-pointer border-2 rounded-md border-gray-500 hidden">
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
  </div>
</template>
<script lang="ts" setup>
import userStore from '@/store/user';
import utils from '@/utils';
import { ref } from 'vue';
import menuService from '@/composables/menu'
import Notification from '@/components/Notification.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
const user = userStore().info
const userRef = ref(user)
const fullScreen = () =>{
   document.documentElement.requestFullscreen()
}

</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="flex justify-between px-4 py-3 bg-white">
    <el-breadcrumb separator="/" class="flex items-center">
      <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
     </el-breadcrumb>
     <div class="flex items-center justify-center relative group">
        <img src="images/avatar.jpg" class="w-10 h-10 rounded-full">
        <span class="text-sm ml-2">管理员</span>

        <section  class="group-hover:block absolute px-2 py-2 translate-y-full whitespace-nowrap cursor-pointer  border-2 rounded-md border-gray-500 hidden">
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 border-2 text-lg"></i>
               <a class="text-sm text-gray-600">网站首页</a>
            </div>
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 text-lg"></i>
               <a class="text-sm text-gray-600">用户中心</a>
            </div>
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 text-lg"></i>
               <a class="text-sm text-gray-600">会员中心</a>
            </div>
        </section>
         
     </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

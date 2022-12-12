<template>
  <div class="flex justify-between px-4 py-3">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
     </el-breadcrumb>
     <div class="flex items-center relative">
        <img src="images/avatar.jpg" class="w-10 h-10 rounded-full">
        <span class="text-sm ml-2">管理员</span>

        <section class="absolute px-2 py-2 translate-y-20 whitespace-nowrap cursor-pointer  border-2 rounded-md border-gray-500">
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 text-lg"></i>
               < class="text-sm text-gray-600">网站首页</>
            </div>
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 text-lg"></i>
               <a class="text-sm text-gray-600">网站首页</a>
            </div>
            <div class="flex items-center">
                <i class="fab fa-github-alt mr-2 text-lg"></i>
               <a class="text-sm text-gray-600">网站首页</a>
            </div>
        </section>
         
     </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

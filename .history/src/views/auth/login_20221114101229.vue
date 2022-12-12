<template>
  <div class="bg-slate-100 h-screen flex justify-center items-start md:items-center">
    <div
      class="
        w-[720px]
        bg-white
        md:grid grid-cols-2
        shadow-md
        rounded-md
        overflow-hidden
        m-4
        md:m-0
      "
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mb-10">会员登录</h2>
        <HdInput placeholder="请输入手机号或邮箱"></HdInput>
        <HdInput placeholder="请输入会员密码"></HdInput>

         <div class="flex gap-2 text-xs text-gray-700 justify-center mt-4">
          <a href="">网站首页</a>
          <a href="">会员注册</a>
          <a href="">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/work.jpg" class="h-80 w-screen object-cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import hdinput from '@/components/form/hd-input.vue'
</script>
 
<style lang="scss" scoped>


</style>

<template>
    <div class="bg-slate-100 h-screen flex justify-center items-center">
      <div class="w-[720px] bg-white grid grid-cols-2 shadow-md rounded-md overflow-hidden" >
        <div class="p-6" >
            <h2 class="text-center text-gray-700 text-lg mb-5">会员登录</h2>
            <input type="text" placeholder="请输入手机号或邮箱" class="">
            <input type="password" placeholder="请输入密码" class="mt-4"/>
            <button>登录</button>
      </div>
      <div>
        <img src="/images/work.jpg" class="h-80 w-screen object-cover">
      </div>
      </div>
    </div>
</template>


<script lang="ts" setup></script>


<style lang="scss" scoped>
input{
    @apply w-full border py-1 border-gray-200 px-2 outline-none placeholder:text-sm  rounded-sm  focus:ring-2 ring-offset-2 duration-300 ring-offset-violet-600 border-white
}
</style>
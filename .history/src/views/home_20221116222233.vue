<template>
    <div class="w-screen h-screen bg-slate-600 flex flex-col justify-center items-center">
        <img src="images/avatar.jpg" class="w-36 h-36 rounded-full border-8 bg-white"/>
        <router-link :to="{ name :'admin.hd'}" class="hd-button px-2 py-4 mt-4">后台管理</router-link>
        <router-link to="" class="hd-button px-2 py-4 mt-4">会员登录</router-link>

        <span class="text-gray-200 text-sm mt-3 font-mono shadow-md">后盾人晚上8点直播，欢迎大家共同交流技术</span>
</div>
</template>
<script setup lang="ts">
</script>
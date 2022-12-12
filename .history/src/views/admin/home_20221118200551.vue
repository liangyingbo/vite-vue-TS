<template>
    <div class=" admin w-screen h-screen flex ">
        <div class="w-[200px] py-2 bg-gray-800">
             <div class="text-white  flex items-center py-2 px-4">
                <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
                <span class="text-base text-gray-300">每晚八点直播</span>
             </div>
             <div class="left-container">
                <dt class="text-white mt-3">
                    <dl class="px-4">
                       <section class="flex justify-between items-center">
                        <div>
                        <i class="fab fa-delicious"></i>
                        <span>错误页面</span>  
                        </div>
                       
                        <i class="fas fa-angle-down"></i>

                       </section>
                         <dd class="my-2 px-2 py-2 rounded-md text-gray-200 cursor-pointer hover:bg-violet-600 duration-300 text-sm">404错误</dd>
                        <dd>500错误</dd>
                    </dl>
                </dt>
             </div>
        </div>
        <div class="bg-gray-200 flex-1">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>

</style>
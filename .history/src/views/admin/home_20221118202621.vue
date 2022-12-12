<template>
    <div class=" admin w-screen h-screen flex ">
        <div class="w-[200px] py-2 bg-gray-800">
             <div class="text-white  flex items-center py-2 px-4">
                <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
                <span class="text-base text-gray-300">每晚八点直播</span>
             </div>
             <div class="left-container">
                <dl class="text-white mt-3">
                    <dt class="px-4">
                       <section class="flex justify-between items-center cursor-pointer">
                        <div>
                        <i class="fas fa-vault text-[17px]"></i>
                        <span class="ml-2 text-[15px]">错误页面</span>  
                        </div>
                        <i class="fas fa-angle-down"></i>
                       </section> 
                    </dt>
                    <dd class="my-2 px-2 py-2 bg-violet-500  rounded-md text-gray-200 cursor-pointer hover:bg-violet-600 duration-300 text-sm">404错误</dd>
                     <dd class="my-2 px-2 py-2 rounded-md text-gray-200 cursor-pointer hover:bg-violet-600 duration-300 text-sm">500错误</dd>
                    
                </dl>
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